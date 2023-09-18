import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, Button, StyleSheet } from 'react-native';

const EventScreen = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('https://www.eventbriteapi.com/v3/events/search/?location.address=nearby&token=YOUR_EVENTBRITE_TOKEN').then(response => response.json()).then(data => setEvents(data.events));
  }, []);
  return <SafeAreaView style={styles.container}>
      <FlatList data={events} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.card}>
            <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <Text style={styles.title}>{item.name.text}</Text>
            <Text style={styles.description}>{item.description.text}</Text>
            <Button title="Buy Tickets" onPress={() => Linking.openURL(item.url)} />
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 10,
    padding: 10
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  },
  description: {
    fontSize: 16,
    marginBottom: 10
  }
});
export default EventScreen;