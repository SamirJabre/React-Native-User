import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import io from 'socket.io-client';
import { useLocalSearchParams } from 'expo-router';
import { BASE_URL } from '@env';
import axios from 'axios';
import * as Location from 'expo-location';

// Socket.IO server URL
const SOCKET_SERVER_URL = 'http://192.168.1.108:6001';

const BusTracker = () => {
  const [busId, setBusId] = useState();
  const [currentLocation, setCurrentLocation] = useState(null);
  const [socket, setSocket] = useState(null);

  const { tripId ,token } = useLocalSearchParams();

  console.log('this is the trip id '+tripId);
  

  // Fetch bus ID based on trip ID
  useEffect(() => {
    axios.post(`${BASE_URL}/tripinfo`, {
      id: tripId
    },{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
    .then(res => {
      console.log(res.data);
      setBusId(res.data.bus_id);
    });
  }, [busId]);

  // Initialize Socket.IO client
  useEffect(() => {
    const newSocket = io(SOCKET_SERVER_URL);
    setSocket(newSocket);

    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, []);

  // Watch position and emit location data
  useEffect(() => {
    if (!busId || !socket) return;

    // Request location permissions
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      // Watch position
      Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 10000,
          distanceInterval: 10,
        },
        (location) => {
          const coords = location.coords;
          setCurrentLocation(coords);
          console.log(coords.latitude);
          console.log('this is the longitude '+coords.longitude);

          // Emit location data to the server
          socket.emit('updateLocation', {
            busId: busId,
            current_latitude: coords.latitude,
            current_longitude: coords.longitude,
          });
        }
      );
    })();
  }, [busId, socket]);

  return (
    <View>
      <Text>Bus Tracker</Text>
      <Text>Bus ID: {busId}</Text>
      <Text>Current Location: {currentLocation ? `${currentLocation.latitude}, ${currentLocation.longitude}` : 'Loading...'}</Text>
    </View>
  );
};

export default BusTracker;