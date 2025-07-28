import React from 'react';
import { Modal, View, Text, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const InfoModal = ({ visible, onClose, styles }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainerFAB}>
        <View style={styles.modalContentFAB}>
          
          {/* Close Button */}
          <TouchableOpacity onPress={onClose} style={styles.closeButtonFAB}>
            <Icon name="close" size={28} color="black" />
          </TouchableOpacity>

          {/* Website Link */}
          <TouchableOpacity onPress={() => Linking.openURL('https://umlib.um.edu.my/')}>
            <Text style={styles.linkText}>🌍 Visit Our Website</Text>
          </TouchableOpacity>

          {/* Contact Details */}
          <Text style={styles.infoText}>📞 Contact: +603-7956 7800</Text>
          <Text style={styles.infoTextFax}>📞 Fax: +603-7967 3661</Text>
          <Text style={styles.infoTextEmail}>📧 Email:</Text>
          <Text style={styles.infoTextEmail2}>query_perpustakaan@um.edu.my</Text>

          {/* Operating Hours */}
          <Text style={styles.infoText}>🕒 Operating Hours:</Text>
          <Text style={styles.hoursText}>
            Mon-Fri: 8 AM - 6.30 PM{'\n'}
            Sat-Sun: 9 AM - 4 PM
          </Text>

          {/* Address */}
          <Text style={styles.infoText}>📍 Address:</Text>
          <Text style={styles.hoursText}>
            Central Library,{'\n'}
            Universiti Malaya,{'\n'}
            50603 Lembah Pantai,{'\n'}
            Kuala Lumpur.
          </Text>

          {/* Rules & Reminders */}
          <Text style={styles.infoText}>⚠️ Rules & Reminders:</Text>
          <Text style={styles.rulesText}>
            - Lost items are kept for 30 days.{'\n'}
            - A valid ID is required for pick-up.{'\n'}
            - No unauthorized reservations allowed.
          </Text>

        </View>
      </View>
    </Modal>
  );
};

export default InfoModal;
