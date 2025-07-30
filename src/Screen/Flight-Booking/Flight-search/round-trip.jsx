import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Style from './Flight-search-style';

const RoundTripSearch = ({ navigation }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSearch = () => {
    navigation.navigate('FlightDetails', {
      from,
      to,
      departureDate,
      returnDate,
    });
  };

  return (
    <View style={Style.container}>
      <TextInput placeholder="From" style={Style.input} value={from} onChangeText={setFrom} />
      <TextInput placeholder="To" style={Style.input} value={to} onChangeText={setTo} />
      <TextInput placeholder="Departure Date (YYYY-MM-DD)" style={Style.input} value={departureDate} onChangeText={setDepartureDate} />
      <TextInput placeholder="Return Date (YYYY-MM-DD)" style={Style.input} value={returnDate} onChangeText={setReturnDate} />
      <TouchableOpacity style={Style.loginButton} onPress={handleSearch}>
        <Text style={Style.loginButtonText}>Search Flights</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoundTripSearch;
