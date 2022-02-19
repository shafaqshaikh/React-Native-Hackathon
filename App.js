import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

import CloseFriends from './Components/CloseFriends';
import Others from './Components/Others';
import Users from './Components/Users';
import {UserProvider} from './Context/UserContext';

const App = () => {
  return (
    <UserProvider>
      <ScrollView style={styles.sectionContainer}>
        <Text style={styles.title}>Liquide Challenge</Text>
        <CloseFriends />
        <Users />
        <Others />
      </ScrollView>
    </UserProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});

export default App;
