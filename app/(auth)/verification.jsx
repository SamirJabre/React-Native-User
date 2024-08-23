import { StyleSheet, Text, View , ImageBackground , SafeAreaView , Image , TextInput} from 'react-native'
import React, { useState , useRef } from 'react'
import AuthButton from '../../components/AuthButton'
import AuthInput from '../../components/AuthInput'
import { StatusBar } from 'expo-status-bar'
import Checkbox from 'expo-checkbox';
import Authback from '../../components/Authback'
import ProgressBar from '../../components/ProgressBar'
import { router } from 'expo-router'


const verification = () => {

  const [code, setCode] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Move to the next input if the current one is filled
    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <SafeAreaView>
    <ImageBackground source={require('../../assets/two.jpg')} style={styles.img}>
    <View style={styles.upper}>
    <Authback route={'register'}/>
    </View>
    <View style={styles.container}>

      <View style={styles.iconContainer}>
      <Image source={require('../../assets/icons/verificationLogo.png')} style={{height:'100%', width:'100%'}}/>
      </View>

      <Text style={styles.maintxt}>We have sent a verification code to</Text>
      <Text style={styles.sectxt}>example123@gmail.com</Text>
      
      <View style={styles.progress}>
      <ProgressBar circle_two={`#0C3B2E`} circle_three={`#0C3B2E`} line_one={`#0C3B2E`} line_two={`#0C3B2E`}/>
      </View>

      <View style={styles.verificationContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.input}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                keyboardType="numeric"
                maxLength={1}
                ref={(ref) => inputs.current[index] = ref}
              />
            ))}
          </View>


      <AuthButton title={'Verify'}/>
    </View>

    </ImageBackground>
    <StatusBar  style='dark'/>
    </SafeAreaView>
  )
}

export default verification

const styles = StyleSheet.create({
  safearea:{
    height:'100%',
    width:'100%',
    flex: 1,
    backgroundColor:'#FFFFFF',
    paddingTop: StatusBar.currentHeight,
  },
  img:{
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  upper:{
    width:'100%',
    height:'20%',
    justifyContent:'flex-start',
    alignItems:'flex-start',
  },
  container:{
    backgroundColor:'#EAEAEA',
    height:'70%',
    flex: 1,
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    borderTopStartRadius:50,
    borderTopEndRadius:50,
  },
  progress:{
    height:"5%",
    width:"50%",
    margin:30,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  verificationContainer: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:40,
  },
  input: {
    backgroundColor: '#BFBFBF',
    height: 50,
    width: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
  },
  iconContainer:{
    width:120,
    height:120,
    backgroundColor:'#FFFFFF',
    borderRadius:100,
    marginTop:20,
  },
  maintxt:{
    color:'#727272',
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    marginTop:30,
    marginBottom:10,
  },
  sectxt:{
    color:'#484848',
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
  },
})