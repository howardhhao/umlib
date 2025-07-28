import React, { useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../firebaseConfig"; 
import styles from "../styles/bookingStyles";
import { SafeAreaView } from 'react-native-safe-area-context';

const db = getFirestore(app);

const timeSlots = ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM", "08:00 PM"];

const generateRooms = (level, capacity) => {
  return Array.from({ length: 8 }, (_, i) => {
    const id = `${level}${i + 1}`;
    return {
      id,
      name: `Room ${id}`,
      capacity
    };
  });
};

const roomsData = {
  2: generateRooms(2, 1, []), 
  3: generateRooms(3, 5, ["08:00 AM", "09:00 AM", "10:00 AM"]), 
  4: generateRooms(4, 5, timeSlots) 
};

const BookingScreen = () => {
  const [selectedLevel, setSelectedLevel] = useState(2);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const navigation = useNavigation();
  const [unavailableSlots, setUnavailableSlots] = useState([]);

  useEffect(() => {
    const fetchBookedTimes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "reservations"));
        const bookedData = {}; 

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.room.id && data.time) {
            if (!bookedData[data.room.id]) {
              bookedData[data.room.id] = [];
            }
            bookedData[data.room.id].push(data.time);
          }
        });

        console.log("Booked Slots:", bookedData);
        setUnavailableSlots(bookedData);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchBookedTimes();
  }, []);

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
  };

  const handleRoomPress = (room) => {
    setSelectedRoom(room);
    setModalVisible(true);
  };

  const handleTimeSlotPress = (time) => {
    setModalVisible(false);
    navigation.navigate("BookingDetails", { room: selectedRoom, time });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <Text style={styles.title}>Select a level and book a room</Text>

      <View style={styles.levelContainer}>
        {[2, 3, 4].map((level) => (
          <TouchableOpacity
            key={level}
            style={[styles.levelCard, selectedLevel === level && styles.selectedLevel]}
            onPress={() => handleLevelSelect(level)}
          >
            <Text style={[styles.levelText, selectedLevel === level && styles.selectedLevelText]}>
              Level {level}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={roomsData[selectedLevel]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.roomCard} onPress={() => handleRoomPress(item)}>
            <View style={[styles.availabilityBar, { backgroundColor: item.isFullyBooked ? "red" : "green" }]} />
            <View style={styles.roomDetails}>
              <Text style={styles.roomText}>{item.name}</Text>
              <Text style={styles.capacityText}>Capacity: {item.capacity} people</Text>
            </View>
          </TouchableOpacity>
        )}
      />

<Modal transparent={true} visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select a Time Slot</Text>
            <FlatList
  data={timeSlots}
  keyExtractor={(item) => item}
  renderItem={({ item }) => {
    const isUnavailable = selectedRoom && unavailableSlots[selectedRoom.id]?.includes(item);
    return (
      <TouchableOpacity
        style={[styles.timeSlot, isUnavailable && styles.unavailableTimeSlot]}
        onPress={() => !isUnavailable && handleTimeSlotPress(item)}
        disabled={isUnavailable}
      >
        <Text style={[styles.timeSlotText, isUnavailable && styles.unavailableTimeSlotText]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  }}
  numColumns={2}
  columnWrapperStyle={{ justifyContent: 'space-between' }}
/>

            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Icon name="close" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
    </SafeAreaView>
  );
};

export default BookingScreen;