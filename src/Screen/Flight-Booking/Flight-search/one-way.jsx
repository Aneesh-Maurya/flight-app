// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Modal,
//   FlatList,
//   Platform,
//   StatusBar,
//   Image
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import styles from './Flight-search-style';
// const airportList = [
//   { city: 'Delhi', code: 'DEL', airport: 'Indira Gandhi International Airport' },
//   { city: 'Kolkata', code: 'CCU', airport: 'Netaji Subhash Chandra Bose International Airport' },
//   { city: 'Mumbai', code: 'BOM', airport: 'Chhatrapati Shivaji Maharaj International Airport' },
//   { city: 'Bangalore', code: 'BLR', airport: 'Kempegowda International Airport' },
// ];
// const offers = [
//   {
//     id: 1,
//     logo: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8gxaBXNL62iniJg5UwAF5zOdJCenNsLPZxA&s' },
//     title: '15% discount with mastercard',
//     subText: 'Lorem ipsum dolor sit am etet adip',
//     tag: '15% OFF',
//   },
//   {
//     id: 2,
//     logo: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvM9-muxTrQBIninREpWeIskPKhOfw8XNxew&s' },
//     title: '23% cashback on visa',
//     subText: 'Terms & conditions apply',
//     tag: '23% OFF',
//   },
//   {
//     id: 3,
//     logo: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZ4hCb5vPUjh4tWA46DC3SeHOsDdOUMrawg&s' },
//     title: '25% off on Rupay',
//     subText: 'Valid till month end',
//     tag: '25% OFF',
//   },
// ];

// const FlightSearchScreen = ({navigation}) => {
//   const [tripType, setTripType] = useState('oneway');
//   const [fromQuery, setFromQuery] = useState('');
//   const [toQuery, setToQuery] = useState('');
//   const [filteredFromAirports, setFilteredFromAirports] = useState([]);
//   const [filteredToAirports, setFilteredToAirports] = useState([]);
//   const [showFromDropdown, setShowFromDropdown] = useState(false);
//   const [showToDropdown, setShowToDropdown] = useState(false);
//   const [departureDate, setDepartureDate] = useState(new Date());
//   const [returnDate, setReturnDate] = useState(null);
//   const [showDatePicker, setShowDatePicker] = useState({ type: '', visible: false });
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [travelClass, setTravelClass] = useState('Economy');
//   const [travelerModalVisible, setTravelerModalVisible] = useState(false);
//   const [classModalVisible, setClassModalVisible] = useState(false);

//   const handleSwap = () => {
//     const temp = fromQuery;
//     setFromQuery(toQuery);
//     setToQuery(temp);
//   };

//   const onDateChange = (event, selectedDate) => {
//     setShowDatePicker({ ...showDatePicker, visible: false });
//     if (selectedDate) {
//       if (showDatePicker.type === 'departure') {
//         setDepartureDate(selectedDate);
//         if (returnDate && selectedDate > returnDate) setReturnDate(null);
//       } else if (showDatePicker.type === 'return') {
//         setReturnDate(selectedDate);
//       }
//     }
//   };

//   const renderAirportItem = (item, setter) => (
//     <TouchableOpacity
//       style={styles.dropdownItem}
//       onPress={() => {
//         setter(item);
//       }}>
//       <Text style={styles.city}>{item.city} ({item.code})</Text>
//       <Text style={styles.airport}>{item.airport}</Text>
//     </TouchableOpacity>
//   );



//   const handleFromInputChange = (text) => {
//     setFromQuery(text);
//     const filtered = airportList.filter(
//       (item) =>
//         item.city.toLowerCase().includes(text.toLowerCase()) ||
//         item.airport.toLowerCase().includes(text.toLowerCase()) ||
//         item.code.toLowerCase().includes(text.toLowerCase())
//     );
//     setFilteredFromAirports(filtered);
//     setShowFromDropdown(true);
//   };

//   const handleToInputChange = (text) => {
//     setToQuery(text);
//     const filtered = airportList.filter(
//       (item) =>
//         item.city.toLowerCase().includes(text.toLowerCase()) ||
//         item.airport.toLowerCase().includes(text.toLowerCase()) ||
//         item.code.toLowerCase().includes(text.toLowerCase())
//     );
//     setFilteredToAirports(filtered);
//     setShowToDropdown(true);
//   };


//   const searchFlights = () => {
//     // Implement flight search logic here 
//     navigation.navigate('flight-Result')
//   }
//   return (
//     <ScrollView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#d90000" />
//        <View style={{flex: 1, backgroundColor: '#d90000', height:150}}>

//        </View>

//       <View style={styles.card}>
//          <View style={styles.tabContainer}>
//         <TouchableOpacity
//           style={[styles.tab, tripType === 'oneway' && styles.tabActive]}
//           onPress={() => setTripType('oneway')}
//         >
//           <Text style={tripType === 'oneway' ? styles.tabTextActive : styles.tabText}>One way</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.tab, tripType === 'round' && styles.tabActive]}
//           onPress={() => setTripType('round')}
//         >
//           <Text style={tripType === 'round' ? styles.tabTextActive : styles.tabText}>Round</Text>
//         </TouchableOpacity>
//       </View>
//         <View style={styles.locationContainer}>
//           {/* FROM Input */}
//           <View style={styles.row}>
//             <Icon name="airplane-takeoff" size={25} color="#333" />
//             <View style={styles.locationInfo}>
//               <TextInput
//                 placeholder="From"
//                 style={styles.input}
//                 value={fromQuery}
//                 onChangeText={handleFromInputChange}
//                 onFocus={() => setShowFromDropdown(true)}
//               />
//             </View>
//           </View>

//           {showFromDropdown && (
//             <View style={styles.dropdown}>
//               {filteredFromAirports.map((item) =>
//                 renderAirportItem(item, (selected) => {
//                   setFromQuery(`${selected.city} (${selected.code})`);
//                   setShowFromDropdown(false);
//                 })
//               )}
//             </View>
//           )}

//           {/* SWAP Button - now OVERLAPS */}
//           {!showFromDropdown && !showToDropdown && (
//             <TouchableOpacity style={styles.switchButton} onPress={handleSwap}>
//               <Icon name="swap-vertical" size={24} color="#333" />
//             </TouchableOpacity>
//           )}

//           {/* TO Input */}
//           <View style={styles.row}>
//             <Icon name="airplane-landing" size={25} color="#333" />
//             <View style={styles.locationInfo}>
//               <TextInput
//                 placeholder="To"
//                 style={styles.input}
//                 value={toQuery}
//                 onChangeText={handleToInputChange}
//                 onFocus={() => setShowToDropdown(true)}
//               />
//             </View>
//           </View>

//           {showToDropdown && (
//             <View style={styles.dropdown}>
//               {filteredToAirports.map((item) =>
//                 renderAirportItem(item, (selected) => {
//                   setToQuery(`${selected.city} (${selected.code})`);
//                   setShowToDropdown(false);
//                 })
//               )}
//             </View>
//           )}
//         </View>

//         <View style={styles.rowBetween}>
//           <TouchableOpacity
//             style={styles.inputBox}
//             onPress={() => setShowDatePicker({ type: 'departure', visible: true })}>
//             <Icon name="calendar" size={16} color="#333" />
//             <Text style={styles.inputText}>{departureDate.toDateString()}</Text>
//           </TouchableOpacity>

//           {tripType === 'round' && (
//             <TouchableOpacity
//               style={styles.inputBox}
//               onPress={() => setShowDatePicker({ type: 'return', visible: true })}>
//               <Icon name="calendar-plus" size={16} color="#333" />
//               <Text style={styles.inputText}>{returnDate ? returnDate.toDateString() : 'Add Return Date'}</Text>
//             </TouchableOpacity>
//           )}
//         </View>

//         <View style={styles.rowBetween}>
//           <TouchableOpacity style={styles.inputBox} onPress={() => setTravelerModalVisible(true)}>
//             <Icon name="account-group" size={18} color="#000" />
//             <Text style={styles.inputText}>{adults + children} Travelers</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.inputBox} onPress={() => setClassModalVisible(true)}>
//             <Icon name="seat-recline-normal" size={18} color="#000" />
//             <Text style={styles.inputText}>{travelClass}</Text>
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity style={styles.searchButton} onPress={searchFlights}>
//           <Text style={styles.searchText}>Search</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Modal for Travelers */}
//       <Modal visible={travelerModalVisible} transparent animationType="fade">
//         <View style={styles.modalContainer}>
//           <View style={styles.modalBox}>
//             <Text style={styles.modalTitle}>Travelers</Text>

//             <View style={styles.rowBetween}>
//               <Text>Adults</Text>
//               <View style={styles.counterRow}>
//                 <TouchableOpacity onPress={() => setAdults(Math.max(1, adults - 1))}><Text style={styles.counterBtn}>-</Text></TouchableOpacity>
//                 <Text style={styles.counterText}>{adults}</Text>
//                 <TouchableOpacity onPress={() => setAdults(adults + 1)}><Text style={styles.counterBtn}>+</Text></TouchableOpacity>
//               </View>
//             </View>

//             <View style={styles.rowBetween}>
//               <Text>Children</Text>
//               <View style={styles.counterRow}>
//                 <TouchableOpacity onPress={() => setChildren(Math.max(0, children - 1))}><Text style={styles.counterBtn}>-</Text></TouchableOpacity>
//                 <Text style={styles.counterText}>{children}</Text>
//                 <TouchableOpacity onPress={() => setChildren(children + 1)}><Text style={styles.counterBtn}>+</Text></TouchableOpacity>
//               </View>
//             </View>

//             <TouchableOpacity onPress={() => setTravelerModalVisible(false)} style={styles.doneBtn}>
//               <Text style={{ color: '#fff' }}>Done</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       {/* Modal for Class */}
//       <Modal visible={classModalVisible} transparent animationType="fade">
//         <View style={styles.modalContainer}>
//           <View style={styles.modalBox}>
//             <Text style={styles.modalTitle}>Class</Text>

//             {['Economy', 'Premium Economy', 'Business', 'First'].map(cls => {
//               const isSelected = travelClass === cls;
//               return (
//                 <TouchableOpacity
//                   key={cls}
//                   onPress={() => {
//                     setTravelClass(cls);
//                     setClassModalVisible(false);
//                   }}
//                   style={[
//                     {
//                       paddingVertical: 10,
//                       paddingHorizontal: 12,
//                       borderRadius: 8,
//                       marginBottom: 6,
//                     },
//                     isSelected && {
//                       backgroundColor: '#fceeee', // light highlight
//                       borderColor: '#f11414',
//                       borderWidth: 1,
//                     },
//                   ]}
//                 >
//                   <Text
//                     style={{
//                       color: isSelected ? '#f11414' : '#000',
//                       fontWeight: isSelected ? 'bold' : 'normal',
//                     }}
//                   >
//                     {cls}
//                   </Text>
//                 </TouchableOpacity>
//               );
//             })}
//           </View>
//         </View>
//       </Modal>


//       {showDatePicker.visible && (
//         <DateTimePicker
//           value={showDatePicker.type === 'departure' ? departureDate : (returnDate || departureDate)}
//           mode="date"
//           display={Platform.OS === 'ios' ? 'spinner' : 'default'}
//           minimumDate={new Date()}
//           onChange={onDateChange}
//         />
//       )}



//       <View style={styles.offerContainer}>
//         <View style={styles.offerHeader}>
//           <Text style={styles.offerTitle}>Hot offer</Text>
//           <Text style={styles.offerSeeAll}>See all</Text>
//         </View>

//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {offers.map((offer) => (
//             <View key={offer.id} style={styles.offerCard}>
//               <View style={styles.offerLeft}>
//                 <Image source={offer.logo} style={styles.offerLogo} />
//                 <Text style={styles.offerTag}>{offer.tag}</Text>
//               </View>
//               <View style={styles.offerRight}>
//                 <Text style={styles.offerCardTitle}>{offer.title}</Text>
//                 <Text style={styles.offerCardSub}>{offer.subText}</Text>
//               </View>
//             </View>
//           ))}
//         </ScrollView>
//       </View>



//     </ScrollView>
//   );
// };


// export default FlightSearchScreen;


import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, FlatList, Modal, StatusBar,ImageBackground
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const tourData = [
  { id: 1, city: 'Delhi', price: '₹5,999', image: 'data:image/jpeg;base64,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' },
  { id: 2, city: 'Mumbai', price: '₹4,299', image: 'data:image/jpeg;base64,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' },
  { id: 3, city: 'Goa', price: '₹6,799', image: 'data:image/jpeg;base64,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' },
];
const airportList = [
  { city: 'Delhi', code: 'DEL', airport: 'Indira Gandhi International Airport' },
  { city: 'Kolkata', code: 'CCU', airport: 'Netaji Subhash Chandra Bose International Airport' },
  { city: 'Mumbai', code: 'BOM', airport: 'Chhatrapati Shivaji Maharaj International Airport' },
  { city: 'Bangalore', code: 'BLR', airport: 'Kempegowda International Airport' },
];
const FlightSearchScreen = ({navigation}) => {
  const [tripType, setTripType] = useState('oneWay');
  const [fromQuery, setFromQuery] = useState('');
  const [toQuery, setToQuery] = useState('');
  const [filteredFromAirports, setFilteredFromAirports] = useState([]);
  const [filteredToAirports, setFilteredToAirports] = useState([]);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState({ type: '', visible: false });
  const [passengers, setPassengers] = useState({ adults: 0, children: 0 });
  const [travelClass, setTravelClass] = useState('Economy');
  const [travelerModalVisible, setTravelerModalVisible] = useState(false);
  const [classModalVisible, setClassModalVisible] = useState(false);

  const [passengerModalVisible, setPassengerModalVisible] = useState(false);

  const handleSwap = () => {
    const temp = fromQuery;
    setFromQuery(toQuery);
    setToQuery(temp);
  };

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker({ ...showDatePicker, visible: false });
    if (selectedDate) {
      if (showDatePicker.type === 'departure') {
        setDepartureDate(selectedDate);
        if (returnDate && selectedDate > returnDate) setReturnDate(null);
      } else if (showDatePicker.type === 'return') {
        setReturnDate(selectedDate);
      }
    }
  };

  const renderAirportItem = (item, setter) => (
    <TouchableOpacity
      style={styles.dropdownItem}
      onPress={() => {
        setter(item);
      }}>
      <Text style={styles.city}>{item.city} ({item.code})</Text>
      <Text style={styles.airport}>{item.airport}</Text>
    </TouchableOpacity>
  );

  const searchFlights = () => {
    // Implement flight search logic here 
    navigation.navigate('flight-Result')
  }

  const handleFromInputChange = (text) => {
    console.log('From Input Changed:', text);
    const query = text.trim();
    setFromQuery(query);

    if (query === '') {
      setFilteredFromAirports([]);
      setShowFromDropdown(false);
      return;
    }

    const filtered = airportList.filter(({ city, airport, code }) => {
      const lower = query.toLowerCase();
      return (
        city.toLowerCase().includes(lower) ||
        airport.toLowerCase().includes(lower) ||
        code.toLowerCase().includes(lower)
      );
    });

    setFilteredFromAirports(filtered);
    setShowFromDropdown(filtered.length > 0); // 👈 Only show dropdown if results exist
  };

  const handleToInputChange = (text) => {
    const query = text.trim();
    setToQuery(query);

    if (query === '') {
      setFilteredToAirports([]);
      setShowToDropdown(false); // 👈 Hide dropdown on empty input
      return;
    }

    const filtered = airportList.filter(({ city, airport, code }) => {
      const lower = query.toLowerCase();
      return (
        city.toLowerCase().includes(lower) ||
        airport.toLowerCase().includes(lower) ||
        code.toLowerCase().includes(lower)
      );
    });

    setFilteredToAirports(filtered);
    setShowToDropdown(filtered.length > 0); // 👈 Show only if results found
  };


  const increment = (field) => {
    setPassengers((prev) => ({ ...prev, [field]: prev[field] + 1 }));
  };

  const decrement = (field) => {
    setPassengers((prev) => ({
      ...prev,
      [field]: Math.max(0, prev[field] - 1),
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#d90000" />
      <ImageBackground
        source={{ uri: 'https://wallpapers.com/images/hd/flight-1920-x-1200-background-0ps9mkooag0ifqnh.jpg' }} 
        style={{ flex: 1, width: 600, height: 200, justifyContent: 'center', alignItems: 'center   ', ...StyleSheet.absoluteFillObject }}
        resizeMode="cover"  
      />
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 0, paddingTop: 0, paddingBottom: 20 }}>
        <Text style={styles.title}>Find Your{'\n'}Best Flight</Text>

        {/* <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhrD2BdsgeHks4KjDSIbk1syHdBy4JQ7N8O9swc8yv-MndBK3miEELA6xy_7ANiZRoq9g&usqp=CAU' }}
          style={styles.planeImage}
          resizeMode="contain"
        /> */}
      </View>
      <View style={{ flex: 2, backgroundColor: '#fff', elevation: 4, borderRadius: 10, padding: 20, marginBottom: 20, borderTopColor: '#d90000', borderTopWidth: 3, borderBottomColor: '#d90000', borderBottomWidth: 3 }}>

        {/* Trip Toggle */}
        <View style={styles.tripToggle}>
          {['oneWay', 'roundTrip'].map((type) => (
            <TouchableOpacity
              key={type}
              style={[styles.tripButton, tripType === type && styles.tripButtonSelected]}
              onPress={() => setTripType(type)}
            >
              <Text style={tripType === type ? styles.tripTextSelected : styles.tripText}>
                {type === 'oneWay' ? 'One Way' : 'Round Trip'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Input Groups */}
        <View>
          <View style={styles.inputGroup}>
            <Icon name="map-marker" size={22} color="#d90000" style={styles.inputIcon} />
            <TextInput
              placeholder="From"
              style={styles.input}
              value={fromQuery}
              onChangeText={handleFromInputChange}
              onFocus={() => {
                setShowToDropdown(false);
              }}
            />

          </View>
          {showFromDropdown && (
            <View style={styles.dropdown}>
              <ScrollView>
                {filteredFromAirports.map((item) =>
                  renderAirportItem(item, (selected) => {
                    setFromQuery(`${selected.city} (${selected.code})`);
                    setShowFromDropdown(false);
                  })
                )}
              </ScrollView>
            </View>
          )}

        </View>

        <View>
          <View style={styles.inputGroup}>
            <Icon name="map-marker-outline" size={22} color="#d90000" style={styles.inputIcon} />

            <TextInput
              placeholder="To"
              style={styles.input}
              value={toQuery}
              onChangeText={handleToInputChange}
              onFocus={() => {
                setShowFromDropdown(false);
              }}
            />
          </View>

          {showToDropdown && (
            <View style={styles.dropdown}>
              <ScrollView>
                {filteredToAirports.map((item) =>
                  renderAirportItem(item, (selected) => {
                    setToQuery(`${selected.city} (${selected.code})`);
                    setShowToDropdown(false);
                  })
                )}
              </ScrollView>
            </View>
          )}
        </View>


        <TouchableOpacity onPress={() => setShowDatePicker({ type: 'departure', visible: true })} style={styles.inputGroup}>
          <Icon name="calendar" size={22} color="#d90000" style={styles.inputIcon} />
          <Text style={styles.inputText}>{departureDate.toDateString()}</Text>
        </TouchableOpacity>
        {tripType === 'roundTrip' && (

          <TouchableOpacity onPress={() => setShowDatePicker({ type: 'return', visible: true })} style={styles.inputGroup}>
            <Icon name="calendar" size={22} color="#d90000" style={styles.inputIcon} />
            <Text style={styles.inputText}>{returnDate ? returnDate.toDateString() : 'Add Return Date'}</Text>
          </TouchableOpacity>
        )}


        <TouchableOpacity onPress={() => setPassengerModalVisible(true)} style={styles.inputGroup}>
          <Icon name="account" size={22} color="#d90000" style={styles.inputIcon} />
          <Text style={styles.inputText}>
            {passengers.adults + passengers.children} Passenger(s), {travelClass}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchButton} onPress={searchFlights}>
          <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, backgroundColor: '#fff', }}>
        {/* Upcoming Tours */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Tours</Text>
          <Text style={styles.seeMore}>See more</Text>
        </View>

        <FlatList
          data={tourData}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.city}</Text>
              <Text style={styles.cardPrice}>{item.price}</Text>
            </View>
          )}
        /></View>



      {/* 🧑 Passenger Selector Modal */}
      <Modal visible={passengerModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Passengers</Text>

            {['adults', 'children'].map((type) => (
              <View key={type} style={styles.passengerRow}>
                <Text style={styles.passengerLabel}>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
                <View style={styles.counterControls}>
                  <TouchableOpacity onPress={() => decrement(type)}>
                    <Icon name="minus-circle-outline" size={28} color="#d90000" />
                  </TouchableOpacity>
                  <Text style={styles.countValue}>{passengers[type]}</Text>
                  <TouchableOpacity onPress={() => increment(type)}>
                    <Icon name="plus-circle-outline" size={28} color="#d90000" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}

            <Text style={[styles.passengerLabel, { marginTop: 20 }]}>Class</Text>
            <View style={styles.classOptions}>
              {['Economy', 'Business', 'First'].map((cls) => (
                <TouchableOpacity
                  key={cls}
                  style={[styles.classOption, travelClass === cls && styles.selectedClass]}
                  onPress={() => setTravelClass(cls)}
                >
                  <Text style={travelClass === cls ? styles.classTextSelected : styles.classText}>
                    {cls}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setPassengerModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {showDatePicker.visible && (
        <DateTimePicker
          value={showDatePicker.type === 'departure' ? departureDate : (returnDate || departureDate)}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          minimumDate={new Date()}
          onChange={onDateChange}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { paddingLeft: 25, paddingRight: 25, backgroundColor: '#FFF' },
  title: { fontSize: 28, fontWeight: '700', color: '#fff', marginBottom: 30 },
  planeImage: { width: 170, height: 120, marginBottom: 20, },
  tripToggle: {

    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    padding: 5,
    // marginBottom: 20,
  },
  tripButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  tripButtonSelected: { backgroundColor: '#d90000' },
  tripText: { fontWeight: '500', color: '#888' },
  tripTextSelected: { color: '#fff', fontWeight: '600' },
  inputIcon: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 25,
    padding: 5,
    marginBottom: 2,
    marginTop: 15,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: '#333',
    borderRadius: 25,
    backgroundColor: '#f8f8f8',
    marginLeft: 3,
  },
  inputText: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: '#333',
    borderRadius: 25,
    backgroundColor: '#f8f8f8',
    marginLeft: 3,
  },
  dropdown: { backgroundColor: '#f9f9f9', padding: 5, borderRadius: 10, height: 100 },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },

  searchButton: {
    backgroundColor: '#d90000',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 20,
  },
  searchText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: '600' },
  seeMore: { fontSize: 14, color: '#d90000' },
  card: {
    width: 140,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 2,
  },
  cardImage: { width: '100%', height: 100 },
  cardTitle: { fontSize: 16, fontWeight: '600', padding: 10 },
  cardPrice: { fontSize: 14, paddingHorizontal: 10, paddingBottom: 10, color: '#d90000' },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#00000088',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modalTitle: { fontSize: 18, fontWeight: '700', marginBottom: 20, color: '#000' },
  modalButton: {
    backgroundColor: '#d90000',
    padding: 12,
    marginTop: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  modalButtonText: { color: '#fff', fontSize: 16 },
  passengerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  passengerLabel: { fontSize: 16, fontWeight: '600', color: '#000' },
  counterControls: { flexDirection: 'row', alignItems: 'center' },
  countValue: { fontSize: 16, fontWeight: '600', marginHorizontal: 15 },
  classOptions: { flexDirection: 'row', marginTop: 10 },
  classOption: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
  },
  selectedClass: { borderColor: '#d90000', backgroundColor: '#FFEDD5' },
  classText: { color: '#555' },
  classTextSelected: { color: '#d90000', fontWeight: '600' },
    city: { fontWeight: 'bold', fontSize: 15 },
  code: { fontWeight: 'normal', fontSize: 14, color: '#999' },
});

export default FlightSearchScreen;

