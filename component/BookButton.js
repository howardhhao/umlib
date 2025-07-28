import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/homeStyles';

const BookButton = ({ onPress, text = "Book a Room", icon = "room", iconSize = 40, iconColor = "white" }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Icon name={icon} size={iconSize} color={iconColor} />
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookButton;