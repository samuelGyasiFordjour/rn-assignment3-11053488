import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');


    return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.cont}>
          <Text style={styles.text}>Hello, Devs</Text>
          <Text style={styles.task}>14 tasks today</Text>
        </View>
        <Image source={require('./assets/person.png')} style={styles.profileImage} />
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Image source={require('./assets/searchicon.png')} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <Image source={require('./assets/Group2.png')} style={styles.filterImage} />
      </View>
      <StatusBar style="auto" />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7ECE8',
    padding: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 70,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
  },
  cont: {
    alignItems: 'flex-start',
  },
  task: {
    fontSize: 10,
    marginLeft: 2,
  },

   searchContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: 'white',
  },
  searchIcon: {
    width: 21,
    height: 21,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    fontWeight: 'bold',
  },

    filterImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginLeft: 12,
    borderWidth: 2,
  },
  word: {
    fontSize: 20,
    marginTop: 30,
    fontWeight: 'bold',
  },
  categorycards: {
    marginTop: 20,
  },

  });