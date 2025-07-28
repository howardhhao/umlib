import React, { useState, useEffect, useCallback }  from 'react';
import { View, Text, TouchableOpacity,ScrollView, FlatList, Modal, TextInput, RefreshControl} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { collection, getDocs, doc, deleteDoc, updateDoc  } from "firebase/firestore";
import { db } from "../firebaseConfig"; 
import styles from "../styles/homeStyles";
import ReminderList from '../component/ReminderList';
import InfoModal from '../component/InfoModal';
import InfoFAB from '../component/InfoFAB';
import BookButton from '../component/BookButton';
import Toast from 'react-native-toast-message';
import QRCode from 'react-native-qrcode-svg';
import { SafeAreaView } from 'react-native-safe-area-context';


const HomeScreen = () => {
  const navigation = useNavigation();

  const [reservations, setReservations] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [reportModalVisible, setReportModalVisible] = useState(false);
  const [rateModalVisible, setRateModalVisible] = useState(false);
  const [reportText, setReportText] = useState("");
  const [rating, setRating] = useState(0);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [notificationModalVisible, setNotificationModalVisible] = useState(false);


  const handleRefresh = async () => {
  setRefreshing(true);
  await fetchReservations();
  setRefreshing(false);
};

  const fetchReservations = useCallback(async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "reservations"));
    const now = new Date();

    const data = querySnapshot.docs.map((doc) => {
      const bookingDate = doc.data().date ? new Date(doc.data().date) : null;
      const bookingTime = doc.data().time;
      const [hours, minutes] = bookingTime?.split(':') || [0, 0];
      const bookingDateTime = bookingDate
        ? new Date(bookingDate.setHours(hours, minutes))
        : null;

      return {
        id: doc.id,
        roomName: doc.data().room?.name || "No Room Name",
        date: doc.data().date ? new Date(doc.data().date).toLocaleDateString() : "No Date",
        time: bookingTime || "No Time",
        person: doc.data().name || "No Person",
        floor: doc.data().room?.id ? parseInt(doc.data().room.id.charAt(0), 10) : null,
        bookingDateTime,
      };
    });

    setReservations(data);

    // Notification logic
    const upcomingNotifications = data.flatMap((booking) => {
      if (!booking.bookingDateTime) return [];

      const diffMs = booking.bookingDateTime.getTime() - now.getTime();
      const diffMin = Math.floor(diffMs / (1000 * 60));
      const messages = [];

      if (diffMin === 60) {
        messages.push(`Reminder: Booking for ${booking.roomName} in 1 hour.`);
      }
      if (diffMin === 15) {
        messages.push(`Reminder: Booking for ${booking.roomName} in 15 minutes.`);
      }

      return messages;
    });

    setNotifications(prev => [...new Set([...prev, ...upcomingNotifications])]);
  } catch (error) {
    console.error("Error fetching reservations:", error);
  }
}, []);

  useEffect(() => {
    fetchReservations();
  }, [fetchReservations]);
  
  const handleCancelBooking = async () => {
    if (!selectedBooking || !selectedBooking.id) {
      console.error("No booking selected for deletion.");
      return;
    }
  
    try {
      const bookingRef = doc(db, "reservations", selectedBooking.id);
      await deleteDoc(bookingRef);
      setReservations((prev) => prev.filter((item) => item.id !== selectedBooking.id));
      setModalVisible(false);
       Toast.show({
        type: 'success',
        text1: 'Your booking has been canceled.',
        text2: 'We hope to see you again soon!',
       });
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  const toggleReportModal = () => {
    setReportModalVisible(!reportModalVisible);
  };

  const toggleRateModal = () => {
    setRateModalVisible(!rateModalVisible);
  };

  const handleReportSubmit = async  () => {
    if (!reportText.trim()) {
      Toast.show({
        type: 'error',
        text1: 'Please enter a report message.',
        text2: 'Your feedback is important to us.',
       });
      return;
    }
    try {
      const bookingRef = doc(db, "reservations", selectedBooking.id);
      await updateDoc(bookingRef, {
        reportedText: reportText, 
      });
      Toast.show({
        type: 'success',
        text1: 'Report submitted.',
        text2: 'Thank you for your feedback!',
       });
      setReportModalVisible(false);
      setReportText("");
    } catch (error) {
      console.error("Error submitting report:", error);
      Toast.show({
        type: 'error',
        text1: 'Failed to submit report.',
        text2: 'Please try again.',
       });
    }
  };

  const handleRatingSubmit = async  () => {
    if (rating === 0) {
       Toast.show({
        type: 'error',
        text1: 'Please select a rating.',
        text2: 'Your feedback is important to us.',
       });
      return;
    }
    try {
      const bookingRef = doc(db, "reservations", selectedBooking.id);
      
      await updateDoc(bookingRef, {
        rating: rating,
      });
         Toast.show({
        type: 'success',
        text1: 'Thank You!',
        text2: '`You rated ${rating} stars.`',
       });
      setRateModalVisible(false);
      setRating(0); 
    } catch (error) {
      console.error("Error submitting rating:", error);
       Toast.show({
        type: 'error',
        text1: 'Failed to submit rating.',
        text2: 'Please try again.',
       });
    }
  };

  const handleShowQRCode = () => {
  setShowQRModal(true); 
};

  return (
  <SafeAreaView style={{ flex: 1 }}>
  <ScrollView
    contentContainerStyle={styles.scrollContainer}
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
    }
  >
    <Text style={styles.title}>UMLIB Room Reservation</Text>
    <Text style={styles.welcome_title}>Welcome back,</Text>
    <Text style={styles.name}>WONG WEN HAO</Text>

    <ReminderList />
    <BookButton onPress={() => navigation.navigate('Booking')} />

    {/* Upcoming Booking Section */}
    <View style={styles.upcoming_booking}>
      <Text style={styles.sectionTitle}>Your Upcoming Booking</Text>

      {reservations.length === 0 ? (
        <Text style={styles.noReservation}>No upcoming reservations.</Text>
      ) : (
        <FlatList
          data={reservations}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.reservationCard}
              activeOpacity={0.85}
              onPress={() => {
                setSelectedBooking(item);
                setModalVisible(true);
              }}
            >
              <View style={styles.cardTopRow}>
                <Text style={styles.cardRoom}>{item.roomName}</Text>
                <Icon name="chevron-right" size={26} color="#ccc" />
              </View>

              <View style={styles.badgeRow}>
                <View style={styles.badge}>
                  <Icon name="event" size={14} color="#555" />
                  <Text style={styles.badgeText}>{item.date}</Text>
                </View>
                <View style={styles.badge}>
                  <Icon name="schedule" size={14} color="#555" />
                  <Text style={styles.badgeText}>{item.time}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}

      {/* Booking Detail Modal */}
      {selectedBooking && (
        <Modal transparent visible={modalVisible} animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>{selectedBooking.roomName}</Text>

              {/* Grid Info */}
              <View style={styles.gridContainer}>
                <View style={styles.infoCard}>
                  <View style={styles.cardHeader}>
                    <Icon name="calendar-today" size={20} color="#666" />
                    <Text style={styles.cardTitle}>Date</Text>
                  </View>
                  <Text style={styles.cardValue}>{selectedBooking.date}</Text>
                </View>

                <View style={styles.infoCard}>
                  <View style={styles.cardHeader}>
                    <Icon name="access-time" size={20} color="#666" />
                    <Text style={styles.cardTitle}>Time</Text>
                  </View>
                  <Text style={styles.cardValue}>{selectedBooking.time}</Text>
                </View>

                <View style={styles.infoCard}>
                  <View style={styles.cardHeader}>
                    <Icon name="person" size={20} color="#666" />
                    <Text style={styles.cardTitle}>Booked by</Text>
                  </View>
                  <Text style={styles.cardValue}>{selectedBooking.person}</Text>
                </View>

                <View style={styles.infoCard}>
                  <View style={styles.cardHeader}>
                    <Icon name="place" size={20} color="#666" />
                    <Text style={styles.cardTitle}>Floor</Text>
                  </View>
                  <Text style={styles.cardValue}>{selectedBooking.floor}</Text>
                </View>
              </View>

              {/* Report + Rate */}
              <View style={styles.buttonContainer}>
                <View style={styles.actionButtonsRow}>
                  <TouchableOpacity
                    style={styles.iconTextButton}
                    onPress={toggleReportModal}
                  >
                    <Icon name="report-problem" size={25} color="#000" />
                    <Text style={styles.iconButtonText}>Report</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.iconTextButton}
                    onPress={toggleRateModal}
                  >
                    <Icon name="star-border" size={25} color="#000" />
                    <Text style={styles.iconButtonText}>Rate</Text>
                  </TouchableOpacity>
                </View>

                {/* Report Modal */}
                <Modal visible={reportModalVisible} animationType="slide" transparent>
                  <View style={styles.modalContainerAction}>
                    <View style={styles.modalContentAction}>
                      <Text style={styles.sectionTitle}>Report Issue:</Text>
                      <TextInput
                        style={styles.ReportTextInput}
                        placeholder="Enter details here..."
                        value={reportText}
                        onChangeText={setReportText}
                        multiline
                      />
                      <TouchableOpacity
                        onPress={handleReportSubmit}
                        style={styles.confirmButton}
                      >
                        <Text style={styles.Modal2buttonText}>Submit</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => setReportModalVisible(false)}
                        style={styles.closeButtonAction}
                      >
                        <Icon name="close" size={28} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>

                {/* Rate Modal */}
                <Modal visible={rateModalVisible} animationType="slide" transparent>
                  <View style={styles.modalContainerAction}>
                    <View style={styles.modalContentAction}>
                      <TouchableOpacity
                        onPress={() => setRateModalVisible(false)}
                        style={styles.closeButtonAction}
                      >
                        <Icon name="close" size={28} color="black" />
                      </TouchableOpacity>

                      <Text style={styles.sectionTitle}>Rate Your Experience:</Text>

                      <View style={styles.ratingContainer}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <TouchableOpacity key={star} onPress={() => setRating(star)}>
                            <Icon
                              name="star"
                              size={40}
                              color={rating >= star ? "gold" : "gray"}
                            />
                          </TouchableOpacity>
                        ))}
                      </View>

                      <TouchableOpacity
                        onPress={handleRatingSubmit}
                        style={styles.confirmButton}
                      >
                        <Text style={styles.Modal2buttonText}>Submit</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>

              {/* Close and Cancel Booking Buttons */}
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButtonAction}
              >
                <Icon name="close" size={28} color="black" />
              </TouchableOpacity>

               <TouchableOpacity
                onPress={handleShowQRCode}
                style={styles.qrButton}
              >
                <Text style={styles.Modal2buttonText}>Show QR Code</Text>
              </TouchableOpacity>

              <Modal visible={showQRModal} transparent animationType="slide">
  <View style={styles.modalContainerAction}>
    <View style={styles.modalContentAction}>
      <Text style={styles.sectionTitle}>Your QR Code</Text>
      <QRCode value={selectedBooking?.id || "N/A"} size={200} />
      
      <TouchableOpacity
        onPress={() => setShowQRModal(false)}
        style={styles.closeButtonAction}
      >
        <Icon name="close" size={28} color="black" />
      </TouchableOpacity>
    </View>
  </View>
</Modal>

              <TouchableOpacity
                onPress={handleCancelBooking}
                style={styles.closeButton}
              >
                <Text style={styles.Modal2buttonText}>Cancel Booking</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>

    {/* Floating Info Button + Modal */}
    <InfoFAB onPress={() => setInfoModalVisible(true)} styles={styles} />
    <InfoModal
      visible={infoModalVisible}
      onClose={() => setInfoModalVisible(false)}
      styles={styles}
    />
  </ScrollView>
  </SafeAreaView>
);

};
export default HomeScreen;