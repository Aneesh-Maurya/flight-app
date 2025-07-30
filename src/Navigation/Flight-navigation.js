import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OneWaySearch from '../Screen/Flight-Booking/Flight-search/one-way';
import RoundTripSearch from '../Screen/Flight-Booking/Flight-search/round-trip';

const Tab = createMaterialTopTabNavigator();

const FlightSearchScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => {
                const isFocused =
                    navigation.getState().routes[navigation.getState().index].name === route.name;

                return {
                    tabBarActiveTintColor: '#db0d0d', // Red text when active
                    tabBarInactiveTintColor: '#000000', // White text when inactive
                    tabBarLabelStyle: {
                        fontWeight: 'bold',
                        fontSize: 14,
                    },
                    tabBarStyle: {
                        backgroundColor: '#ffffff',
                        height: 50, // Increase height to allow tall indicator
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: '#db0d0dff',
                        height: 4, // Keep it visible
                        borderRadius: 2,
                    },
                   
                    tabBarItemStyle: {
                        backgroundColor: isFocused ? '#f6f8faff' : '#cc1800', // optional background per tab
                    },
                };
            }}
        >
            <Tab.Screen name="One Way" component={OneWaySearch} />
            <Tab.Screen name="Round Trip" component={RoundTripSearch} />
        </Tab.Navigator>
    );
};

export default FlightSearchScreen;