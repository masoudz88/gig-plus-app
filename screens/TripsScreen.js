// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function TripsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Use your own color scheme
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  // Add more styles for each UI component
});
