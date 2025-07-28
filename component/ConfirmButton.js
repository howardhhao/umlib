import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/bookingDetailsStyles';

const ConfirmButton = ({ onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.submitButton} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.submitText}>Confirm Booking</Text>
    </TouchableOpacity>
  );
};

export default ConfirmButton;
