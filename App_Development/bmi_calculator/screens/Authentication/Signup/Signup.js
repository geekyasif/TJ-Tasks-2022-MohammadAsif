import { KeyboardAvoidingView, ScrollView, Pressable, View, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../../style';

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebase";
import Seperator from '../../../widgets/Seperator';

import { Button, Icon, Input, Text } from '@ui-kitten/components';



const Signup = ({ navigation }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [age, setAge] = useState();



  const handleSignup = () => {

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 

        const user = userCredential.user

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: age
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          const errorCode = error.code
          const errorMessage = error.message
          alert(errorMessage, errorCode)
          // ...
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage)
        // ..
      });

  }


  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        <KeyboardAvoidingView style={styles.KeyboardAvoidingViewContainer}>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../../assets/bmi.jpg')} style={{ height: 250, width: 250, resizeMode: 'contain' }} />
          </View>

          <Input
            onChangeText={nextValue => setName(nextValue)}
            value={email}
            label="Name"
            placeholder="Enter your name"
          />

          <Seperator/>

          <Input
            onChangeText={nextValue => setAge(nextValue)}
            value={email}
            label="Age"
            placeholder="Enter your age"
          />

<Seperator/>

          <Input
            onChangeText={nextValue => setEmail(nextValue)}
            value={email}
            label="Email"
            placeholder="Enter your email"

          />


<Seperator/>

          <Input
            value={password}
            label='Password'
            placeholder='Enter your password'
            // caption={renderCaption}
            // accessoryRight={renderIcon}
            // secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setPassword(nextValue)}
          />

          
          <Seperator />
          <Button 
          size='small'
            onPress={handleSignup}
          >Signup</Button>
          <Seperator />
          <View style={styles.row}>
            <Text appearance='hint' category='c1'> Aleardy have an account ? </Text>
            <Pressable onPress={() => navigation.navigate("Login")}><Text status='primary' category='c1'>Login here</Text></Pressable>
          </View>

        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Signup
