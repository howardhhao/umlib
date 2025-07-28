import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styles from "../styles/homeStyles";

const reminders = [
  { id: "1", text: "Kindly don't leave your belongings." },
  { id: "2", text: "Please return the key to the counter after using." },
  { id: "3", text: "Please show booking proof to get the key." },
  { id: "4", text: "Do not eat in the room." },
  { id: "5", text: "Ensure all lights are switched off before leaving the room." },
  { id: "6", text: "Loss of room key should be reported immediately." },
];

const ReminderList = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % reminders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.reminder_container}>
      <Image source={require("../assets/megaphone.png")} style={styles.alertIcon} />
      <Text style={styles.reminder}>{reminders[currentPage].text}</Text>
    </View>
  );
};

export default ReminderList;
