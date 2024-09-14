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
    <View>
      <Text>ChatBot</Text>
    </View>
  )
}

export default ChatBot

const styles = StyleSheet.create({})