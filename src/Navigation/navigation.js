import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
const Stack = createNativeStackNavigator();
import FlightNavigationScreen from '../Navigation/Flight-navigation';
import FlightDetailsScreen from '../Screen/Flight-details/FlightDetails';
const Navigation = () => {




    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#f11414ff', // Yellow header
                    height: 100, 
                },
                headerTintColor: '#000', // Header text color (black)
                contentStyle: {
                    backgroundColor: '#FFFFFF', // Screen background
                },
         
            }}>
                <Stack.Screen name="FlightSearch"  component={FlightNavigationScreen} options={{headerShown:true}}/>
                <Stack.Screen name="FlightDetails" component={FlightDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>





    );
};

export default Navigation;