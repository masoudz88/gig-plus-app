import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import EarningsScreen from './screens/EarningsScreen';
import TripsScreen from './screens/TripsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Earnings" 
          component={EarningsScreen} 
          options={{
              tabBarLabel: 'Earnings',
              tabBarIcon: ({ color, size }) => (
              <Ionicons name="card" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Trips" 
          component={TripsScreen} 
          options={{
              tabBarLabel: 'Trips',
              tabBarIcon: ({ color, size }) => (
              <Ionicons name="speedometer" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
