import { FlatList, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const ChatBot = () => {

    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([{ id: '1', text: 'Hello! How can I help you today?', sender: 'bot' }]);
    const [input, setInput] = useState('');

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
      };


  return (
    <View>
      <Text>ChatBot</Text>
    </View>
  )
}

export default ChatBot

const styles = StyleSheet.create({})