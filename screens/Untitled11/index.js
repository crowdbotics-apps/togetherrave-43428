import React, { useState } from "react";
import { SafeAreaView, View, TextInput, Button, FlatList, Text, StyleSheet } from "react-native";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    setMessages([...messages, {
      id: messages.length.toString(),
      text: input
    }]);
    setInput("");
  };

  return <SafeAreaView style={styles.container}>
      <FlatList data={messages} keyExtractor={item => item.id} renderItem={({
      item
    }) => <Text>{item.text}</Text>} />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={input} onChangeText={text => setInput(text)} />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10
  },
  input: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    padding: 5
  }
});
export default ChatScreen;