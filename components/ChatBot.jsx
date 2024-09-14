import { FlatList, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const ChatBot = () => {

    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([{ id: '1', text: 'Hello! How can I help you today?', sender: 'bot' }]);
    const [input, setInput] = useState('');

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
      };

      const sendMessage = () => {
        if (input.trim()) {
          setMessages([...messages, { id: Date.now().toString(), text: input, sender: 'user' }]);
          setInput('');
          // Simulate bot response
          setTimeout(() => {
            setMessages(prevMessages => [...prevMessages, { id: Date.now().toString(), text: 'This is a bot response.', sender: 'bot' }]);
          }, 1000);
        }
      };


  return (
    <>
        <TouchableOpacity onPress={toggleChat} style={styles.chatButtonContainer}>
      <Image style={{height:'70%', width:'70%'}} source={require('../assets/icons/bot.png')}/>
      </TouchableOpacity>
      <Modal
      animationType="slide"
      transparent={true}
      visible={isChatOpen}
      onRequestClose={toggleChat}
    >
      <View style={styles.chatPopup}>

        <View style={styles.chatHeader}>
        <Text style={styles.headerText}>ChatBot</Text>
        <TouchableOpacity onPress={toggleChat} style={styles.closeButton}>
          <Image style={styles.closeButtonIcon} source={require('../assets/icons/close.png')}/>
        </TouchableOpacity>
        </View>

        <FlatList
          data={messages}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={item.sender === 'bot' ? styles.botMessage : styles.userMessage}>
              <Text>{item.text}</Text>
            </View>
          )}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Type your message..."
          />
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    </>
  )
}

export default ChatBot

const styles = StyleSheet.create({})