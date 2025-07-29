import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/homeStyles";
import { reminders } from "../context/reminders";

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