import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';
import BookingDetailsScreen from "./screens/BookingDetailsScreen";
import { FontProvider } from "./context/FontProvider";
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();

const App = () => {
  return (
    <FontProvider> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Booking" component={BookingScreen} />
          <Stack.Screen name="BookingDetails" component={BookingDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>

      <Toast />
    </FontProvider>
  );
};

export default App;
