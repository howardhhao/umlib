import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const InfoFAB = ({ onPress, styles }) => {
  return (
    <TouchableOpacity 
      style={styles.floatingButton} 
      onPress={onPress}
    >
      <Icon name="info" size={28} color="white" />
    </TouchableOpacity>
  );
};

export default InfoFAB;
