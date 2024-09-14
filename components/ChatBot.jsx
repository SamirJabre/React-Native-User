import { FlatList, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const ChatBot = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([{ id: '1', text: 'Hello! How can I help you today?', sender: 'bot' }]);
    const [input, setInput] = useState('');


    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
      };


      const sendMessage = async () => {
        if (input.trim()) {
          const newMessages = [...messages, { id: Date.now().toString(), text: input, sender: 'user' }];
          setMessages(newMessages);
          setInput('');
    
          let botResponse = '';
    
          try {
            // Check if the message is a query for trips
            if (input.toLowerCase().includes('trip to')) {
              const destination = input.split('trip to ')[1];
              const response = await axios.get('http://192.168.1.108:8000/api/trips');
              const trips = response.data.filter(trip => trip.to.toLowerCase() === destination.toLowerCase());
    
              if (trips.length > 0) {
                botResponse = `Yes, there are ${trips.length} trips available. Here are the details:\n` +
                  trips.map(trip => (
                    `Trip from ${trip.from} to ${trip.to} on ${trip.date}.\nDeparture: ${trip.departure_time}, Arrival: ${trip.arrival_time}, Price: $${trip.price}. Rating: ${trip.rating} stars.\n`
                  )).join('\n');
              } else {
                botResponse = 'Sorry, no trips found for the specified criteria.';
              }
            } else {
              // If the message doesn't contain valid trip details, interact with the OpenAI bot
              const { data } = await axios("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                  Authorization: `Bearer `,
                },
                data: {
                  model: "gpt-3.5-turbo",
                  messages: [
                    { role: 'system', content: 'You are a travel assistant. Answer questions related to bus trips between these cities : Tripoli , Anfeh , Chekka , Batroun , Jbeil , Tabarja , Jounieh , Antelias , Beirut , and answer anything related to those cities , and if you got asked about the prices say that the prices are in tickets and each trip may cost 1 ,2 ,3 tickets depend on the distance and stuff and keep the answers short and clear'  },
                    ...newMessages.map(msg => ({ role: msg.sender === 'bot' ? 'assistant' : 'user', content: msg.text })),
                  ],
                  temperature: 0.7,
                },
              });
    
              botResponse = data.choices[0].message.content;
            }
          } catch (error) {
            botResponse = 'There was an error retrieving trip information. Please try again later.';
            console.error("Error fetching trip info:", error);
          }
    
          setMessages(prevMessages => [...prevMessages, { id: Date.now().toString(), text: botResponse, sender: 'bot' }]);
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