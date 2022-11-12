import { View, ScrollView, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState, useLayoutEffect } from 'react'
import styles from '../style';

import { getAuth, signOut } from "firebase/auth";
import { auth } from '../../firebase';

import { EvilIcons, Ionicons, Feather } from '@expo/vector-icons';
import Seperator from '../../widgets/Seperator';


import { Button, Icon, Input, Text, Select, SelectItem,IndexPath } from '@ui-kitten/components';


const data = [
  'Male',
  'Female',
  'Others',
];

const Home = ({ navigation }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState(new IndexPath(0));

  const displayValue = data[gender.row];


  const handleSignout = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
      navigation.replace("Login")
    }).catch((error) => {
      // An error happened.
      alert(error)
    });
  }


  // function to customize the header
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <View
  //         style={{
  //           marginLeft: 15,
  //           marginTop: 5,
  //           flexDirection: 'row',
  //         }}
  //       >
  //         <TouchableOpacity>
  //           <Feather name="log-out" size={24} color="black" onPress={handleSignout} />
  //         </TouchableOpacity>
  //       </View>
  //     ),
  //   })
  // }, [navigation]);


  const handleResult = () => {
    if(height == "" || weight == "" || displayValue == ""){
      alert("All fields are required !")
    }else{
      navigation.navigate("Result", {
        height: height,
        weight: weight,
        gender: displayValue.toLowerCase()
      })
    }
  }
  

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
        <KeyboardAvoidingView style={styles.KeyboardAvoidingViewContainer}>

          
          <View>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../assets/bmi.jpg')} style={{ height: 250, width: 250, resizeMode: 'contain' }} />
          </View>


            <View style={styles.container}>

              <Input
              label='Height (cm)'
                onChangeText={setHeight}
                value={height}
                placeholder="Enter your height"

              />

              <Seperator/>

              <Input
                label='Weight (kg)'
                onChangeText={(value) => setWeight(value)}
                value={weight}
                placeholder="Enter your weight"

              />
              <Seperator/>

              
            <Select
              label="Gender"
              placeholder="Select your gender"
              value={displayValue}
              selectedIndex={gender}
              onSelect={index => setGender(index)}>
              {data.map((title) => (<SelectItem title={title}/>))}
            </Select>

              <Seperator />
              <Button size='small' onPress={handleResult} >Calculate</Button>
            </View>
          </View>


        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
