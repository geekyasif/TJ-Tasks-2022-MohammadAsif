import {
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Pressable,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import React, { useEffect, useState } from 'react'
import styles from '../../style';
import Seperator from "../../../widgets/Seperator";


import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase';


import { Button, Icon, Input, Text } from '@ui-kitten/components';

// const AlertIcon = (props) => (
//   <Icon {...props} name='alert-circle-outline'/>
// );

//
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // const [secureTextEntry, setSecureTextEntry] = useState(true);

  // const toggleSecureEntry = () => {
  //   setSecureTextEntry(!secureTextEntry);
  // };

  // const renderIcon = (props) => (
  //   <TouchableWithoutFeedback onPress={toggleSecureEntry}>
  //     <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
  //   </TouchableWithoutFeedback>
  // );

  // const renderCaption = () => {
  //   return (
  //     <View style={styles.captionContainer}>
  //       {AlertIcon(styles.captionIcon)}
  //       <Text style={styles.captionText}>Should contain at least 8 symbols</Text>
  //     </View>
  //   )
  // }


  // const auth = getAuth();
  // checking the user is logged in or not 
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        var uid = user.uid;
        navigation.replace("Home")
      }
    });

    return unsubscribe;

  }, [])


  // user login 
  const handleLogin = () => {


    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        navigation.replace("Home")
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode, errorMessage)
      });



  }

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
        <KeyboardAvoidingView style={styles.KeyboardAvoidingViewContainer}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../../assets/bmi.jpg')} style={{ height: 250, width: 250, resizeMode: 'contain' }} />
          </View>
          <View>

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

            <Button size='small' onPress={handleLogin}>
              Login
            </Button>
            <Seperator />
            <View style={styles.row}>
              <Text appearance='hint' category='c1'> 
                Don't have an account ? </Text>
              <Pressable
                onPress={() => navigation.navigate('Signup')}
              >
                <Text status='primary' category='c1'>Signup here</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login
