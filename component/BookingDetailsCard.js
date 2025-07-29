import React from 'react';
import { View, Text } from 'react-native';
import styles from "../styles/bookingDetailsStyles"; 

const BookingDetailsCard = ({ room, time }) => {
  return (
    <>
      <Text style={styles.title}>Booking Details</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>
          Room: <Text style={styles.detailValue}>{room.name}</Text>
        </Text>
        <Text style={styles.detailText}>
          Time: <Text style={styles.detailValue}>{time}</Text>
        </Text>
      </View>
    </>
  );
};

export default BookingDetailsCard;
