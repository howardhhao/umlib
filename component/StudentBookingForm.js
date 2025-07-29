import React from 'react';
import { View, Text, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from "../styles/bookingDetailsStyles"; 

const StudentBookingForm = ({
  name,
  setName,
  studentID,
  setStudentID,
  personNumber,
  setPersonNumber,
  phoneNumber,
  setPhoneNumber,
  selectedFaculty,
  setSelectedFaculty,
  facultyOptions,
  setFacultyOptions,
  open,
  setOpen,
}) => {
  return (
    <View style= {styles.containerF}>
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
      <View style={styles.dropdownWrapper}>
        <DropDownPicker
          open={open}
          value={selectedFaculty}
          items={facultyOptions}
          setOpen={setOpen}
          setValue={setSelectedFaculty}
          setItems={setFacultyOptions}
          placeholder="Please select a faculty..."
          style={[styles.dropdown]}
          dropDownContainerStyle={styles.dropdownContainer}
          textStyle={styles.dropdownText}
          placeholderStyle={styles.dropdownPlaceholder}
          labelStyle={styles.dropdownLabel}
        />
      </View>
    </View>
  );
};

export default StudentBookingForm;