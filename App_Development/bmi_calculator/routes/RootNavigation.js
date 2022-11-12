import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from '../screens/Authentication/Login/Login';
import Signup from '../screens/Authentication/Signup/Signup';
import Home from '../screens/Home/Home';
import Result from '../screens/Home/Result';
import { auth } from '.././firebase';
import { onAuthStateChanged } from "firebase/auth";

const RootNavigation = () => {

    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setIsLoggedIn(true)
    //         }
    //     });

    //     return unsubscribe
    // }, [])



    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Stack.Navigator

                screenOptions={{
                    headerTitle: "BMI CALCULATOR",
                    // headerStyle: {
                    //     elevation: 0,
                    //     shadowOpacity: 0,
                    //     backgroundColor: "#212529",
                    // },
                    // headerTintColor: "white",
                }}

            >


                <Stack.Group>
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Login"
                        component={Login}
                    />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Signup"
                        component={Signup}
                    />
                </Stack.Group>


                <Stack.Group>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                    />

                    <Stack.Screen
                        name="Result"
                        component={Result}
                    />
                </Stack.Group>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation

const styles = StyleSheet.create({})