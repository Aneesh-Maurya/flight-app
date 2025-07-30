// src/screens/Booking/FlightDetailsScreen.js
import React from 'react';
import { View, Text, FlatList, Button, StyleSheet,TouchableOpacity } from 'react-native';
import Style from '../Flight-Booking/Flight-search/Flight-search-style';
const mockFlights = [
  { id: '1', airline: 'Indigo', time: '10:00 AM', price: '₹4500' },
  { id: '2', airline: 'Air India', time: '1:00 PM', price: '₹5000' },
  { id: '3', airline: 'SpiceJet', time: '6:00 PM', price: '₹4200' },
];

const FlightDetailsScreen = ({ route }) => {
  const { from, to, date } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Flights</Text>
      <Text>From: {from} | To: {to} | Date: {date}</Text>
      <FlatList
        data={mockFlights}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.flightCard}>
            <Text>{item.airline} - {item.time}</Text>
            <Text>{item.price}</Text>
                 <TouchableOpacity style={Style.loginButton} onPress={() => alert('Booking...')} >
                      <Text style={Style.loginButtonText}>Book Nows</Text>
                    </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default FlightDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  flightCard: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginVertical: 8,
  },
});
