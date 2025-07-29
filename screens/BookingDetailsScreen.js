import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../firebaseConfig"; 
import styles from "../styles/bookingDetailsStyles"; 
import Toast from 'react-native-toast-message';
import ConfirmButton from "../component/ConfirmButton";
import { SafeAreaView } from 'react-native-safe-area-context';
import { faculties } from "../context/faculties";
import BookingDetailsCard from "../component/BookingDetailsCard";
import StudentBookingForm from "../component/StudentBookingForm";

const db = getFirestore(app);

const BookingDetailsScreen = ({ route, navigation }) => {

  const { room, time } = route.params;
  const [name, setName] = useState("");
  const [studentID, setStudentID] = useState("");
  const [personNumber, setPersonNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [facultyOptions, setFacultyOptions] = useState(
  faculties.map((faculty) => ({
    label: faculty,
    value: faculty,
  }))
);

  const handleReservation = async () => {
    if (!name || !studentID || !personNumber || !phoneNumber || !selectedFaculty) {
       Toast.show({
  type: 'error',
  text1: 'Please fill in all fields.',
});
      return;
    }
    try {
      await addDoc(collection(db, "reservations"), {
        room: room,
        time: time,
        name: name,
        studentID: studentID,
        personNumber: personNumber,
        phoneNumber: phoneNumber,
        faculty: selectedFaculty,
        date: new Date().toISOString(),
      });
      Toast.show({
  type: 'success',
  text1: 'Booking Confirmed',
  text2: 'Show the QR code at the counter!',
});
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error saving reservation: ", error);
      Toast.show({
  type: 'error',
  text1: 'Failed to save reservation.',
  text2: 'Please try again.',
});
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{ flex: 1 }}
    keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <BookingDetailsCard room={room} time={time} />

        <StudentBookingForm
        name={name}
        setName={setName}
        studentID={studentID}
        setStudentID={setStudentID}
        personNumber={personNumber}
        setPersonNumber={setPersonNumber}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        selectedFaculty={selectedFaculty}
        setSelectedFaculty={setSelectedFaculty}
        facultyOptions={facultyOptions}
        setFacultyOptions={setFacultyOptions}
        open={open}
        setOpen={setOpen}
      />

        <ConfirmButton onPress={handleReservation} />
      </ScrollView>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  </SafeAreaView>
);
};

export default BookingDetailsScreen;