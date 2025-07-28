import React, { useState } from 'react';
import { View, Text, Animated, PanResponder, StyleSheet, Alert } from 'react-native';

const SwipeToConfirm = ({ onConfirm }) => {
  const [swipeX] = useState(new Animated.Value(0));

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      if (gesture.dx > 0 && gesture.dx <= 200) {
        swipeX.setValue(gesture.dx);
      }
    },
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dx > 150) {
        // Confirm action
        Animated.timing(swipeX, {
          toValue: 200,
          duration: 200,
          useNativeDriver: false,
        }).start(() => {
          Alert.alert("Checked In", "You have successfully checked in.");
          onConfirm(); // Trigger check-in function
          swipeX.setValue(0); // Reset after success
        });
      } else {
        // Reset if not fully swiped
        Animated.spring(swipeX, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  return (
    <View style={styles.swipeContainer}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.swipeButton, { transform: [{ translateX: swipeX }] }]}
      >
        <Text style={styles.swipeText}>Swipe to Check-In</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  swipeContainer: {
    width: 220,
    height: 50,
    backgroundColor: "#ddd",
    borderRadius: 10,
    justifyContent: "center",
    overflow: "hidden",
  },
  swipeButton: {
    width: 220,
    height: 50,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  swipeText: {
    color: "white",
    fontSize: 16,
    fontFamily: 'QuicksandRegular',
  },
});

export default SwipeToConfirm;
