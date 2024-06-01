import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: '1', task: '12 tasks', name: 'Exercise', image: require('./assets/young woman working online.png') },
    { id: '2', task: '8 tasks', name: 'Study', image: require('./assets/young woman working at desk.png') },
    { id: '3', task: '7 tasks', name: 'Cooking', image: require('./assets/1.png') },
    { id: '4', task: '2 tasks', name: 'Eating', image: require('./assets/2.png') },
    { id: '5', task: '6 tasks', name: 'Reading', image: require('./assets/3.jpg') },
    { id: '6', task: '4 tasks', name: 'Playing', image: require('./assets/4.png') },
    { id: '7', task: '8 tasks', name: 'Swimming', image: require('./assets/8.jpeg') },
    { id: '8', task: '1 task', name: 'Shopping', image: require('./assets/5.jpg') },
    { id: '9', task: '9 tasks', name: 'Traveling', image: require('./assets/7.jpg') },
    { id: '10', task: '11 tasks', name: 'Sleeping', image: require('./assets/6.png') },
  ];

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

      <View style={styles.catego}>
        <Text style={styles.heading}>Categories</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categorycards}>
        {categories.map((category) => (
          <View key={category.id} style={styles.group7}>
            <Text style={styles.taskName}>{category.name}</Text>
            <Text style={styles.task}>{category.task}</Text>
            <Image source={category.image} style={styles.catImage} />
          </View>
        ))}
      </ScrollView>

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
  heading: {
    fontSize: 20,
    marginTop: 30,
    fontWeight: 'bold',
  },
  categorycards: {
    marginTop: 20,
  },

   group7: {
    marginRight: 10,
    backgroundColor: 'white',
    width: 170,
    borderRadius: 15,
    padding: 10,
    alignItems: 'flex-start',
  },
  taskName: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  catImage: {
    width: 90,
    height: 90,
    marginTop: 10,
    alignSelf: 'center',
  },

  });