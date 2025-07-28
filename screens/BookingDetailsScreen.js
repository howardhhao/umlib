import React, { useState } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../firebaseConfig"; 
import styles from "../styles/bookingDetailsStyles"; 
import DropDownPicker from "react-native-dropdown-picker";
import Toast from 'react-native-toast-message';
import ConfirmButton from "../component/ConfirmButton";
import { SafeAreaView } from 'react-native-safe-area-context';

const db = getFirestore(app);

 const faculties = [
    'Built Environment',
    'Languages and Linguistics',
    'Pharmacy',
    'Engineering',
    'Education',
    'Dentistry',
    'Business and Economics',
    'Medicine',
    'Science',
    'Computer Science and Information Technology',
    'Arts and Social Sciences',
    'Creative Arts',
    'Law',
    'Sport & Exercise Sciences',
  ];

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
        <Text style={styles.title}>Booking Details</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailText}>Room: <Text style={styles.detailValue}>{room.name}</Text></Text>
          <Text style={styles.detailText}>Time: <Text style={styles.detailValue}>{time}</Text></Text>
        </View>

        <Text style={styles.inputTitle}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.inputTitle}>Matric No</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter matric no"
          value={studentID}
          onChangeText={setStudentID}
        />
        <Text style={styles.inputTitle}>Number of Persons</Text>
        <TextInput
          style={styles.input}
          placeholder="Number of persons"
          value={personNumber}
          onChangeText={(text) => setPersonNumber(text.replace(/[^0-9]/g, ""))}
          keyboardType="numeric"
        />
        <Text style={styles.inputTitle}>Phone number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text.replace(/[^0-9]/g, ""))}
          keyboardType="numeric"
        />
        <Text style={styles.inputTitle}>Faculty</Text>
        <View style={{
          zIndex: 1000,
          width: "100%",
          marginBottom: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 4,
        }}>
          <DropDownPicker
            open={open}
            value={selectedFaculty}
            items={facultyOptions}
            setOpen={setOpen}
            setValue={setSelectedFaculty}
            setItems={setFacultyOptions}
            placeholder="Please select a faculty..."
            style={[styles.dropdown, { fontFamily: 'QuicksandMedium' }]}
            dropDownContainerStyle={styles.dropdownContainer}
            textStyle={{
              fontFamily: 'QuicksandMedium',
              fontSize: 16,
            }}
            placeholderStyle={{
              fontFamily: 'QuicksandMedium',
              fontSize: 16,
              color: '#999',
            }}
            labelStyle={{
              fontFamily: 'QuicksandMedium',
              fontSize: 16,
            }}
          />
        </View>

        <ConfirmButton onPress={handleReservation} />
      </ScrollView>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  </SafeAreaView>
);
};

export default BookingDetailsScreen;