import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
/*import facility from './components/facility';
import home from '.components/home';
import splash from '.components/splash';*/

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const ListHeader = () => {
  //View to set in Header
  return (
    <View style={styles.headerFooterStyle}>
      <Text style={styles.textStyle}>This is Header</Text>
    </View>
  );
};

const ListFooter = () => {
  //View to set in Footer
  return (
    <View style={styles.headerFooterStyle}>
      <Text style={styles.textStyle}>This is Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyListStyle: {
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  itemStyle: {
    padding: 10,
  },
  headerFooterStyle: {
    width: '100%',
    height: 45,
    backgroundColor: '#606070',
  },
  textStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    padding: 7,
  },
});
