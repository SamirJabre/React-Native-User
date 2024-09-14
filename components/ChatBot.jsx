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

const styles = StyleSheet.create({
chatButtonContainer:{
  height: 50,
  width: 50,
  backgroundColor: '#0C3B2E',
  borderRadius: 12,
  position: 'absolute',
  bottom: 20,
  right: 20,
  justifyContent: 'center',
  alignItems: 'center',
},
chatPopup: {
  flex: 1,
  backgroundColor: 'white',
  margin: 20,
  padding: 20,
  borderRadius: 10,
  justifyContent: 'space-between',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
chatHeader: {
  flexDirection: 'row',
  height: 30,
  width: '100%',
  fontSize: 20,
  marginBottom: 10,
  justifyContent: 'space-between',
  alignItems: 'center',
},
headerText:{
  color: 'black',
  fontSize: 20,
  fontFamily: 'Inter-SemiBold',
},
closeButton: {
  width: 30,
  height: 30,
},
botMessage: {
  alignSelf: 'flex-start',
  backgroundColor: '#e1f5fe',
  padding: 10,
  borderRadius: 10,
  marginVertical: 5,
},
userMessage: {
  alignSelf: 'flex-end',
  backgroundColor: '#c8e6c9',
  padding: 10,
  borderRadius: 10,
  marginVertical: 5,
},
inputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
},
input: {
  flex: 1,
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 5,
  padding: 10,
  marginRight: 10,
},
sendButton: {
  backgroundColor: '#0C3B2E',
  padding: 10,
  borderRadius: 5,
},
sendButtonText: {
  color: 'white',
},
closeButtonIcon: {
  height: '100%',
  width: '100%',
},
})