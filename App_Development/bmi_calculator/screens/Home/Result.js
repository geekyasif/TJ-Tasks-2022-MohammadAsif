import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import styles from '.././style';
import { SafeAreaView } from 'react-native-safe-area-context';
import {auth} from '../.././firebase';
import Seperator from '../../widgets/Seperator';
import { Button } from '@ui-kitten/components';
import { signOut } from 'firebase/auth';

const Result = ({ route, navigation }) => {
    const { height, weight, gender } = route.params;
    const [bmiResult, setBmiResult] = useState();
    const [category, setCategory] = useState();
    const [bgColor, setBgColor] = useState();
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState();
    const [age, setAge] = useState();


    useEffect(() => {

            setName(auth.currentUser.displayName)
            setAge(auth.currentUser.photoURL);

            const res = parseInt(weight) / parseInt(height) * parseInt(height);
            setBmiResult(res)

            // bg according to gender
            if (gender == "male") {
                setBgColor("#EAF2F8")
            } else if (gender == "female") {
                setBgColor("#FDEDEC")

            } else {
                setBgColor("#E8F8F5")
            }


            // bmi Category 
            if (bmiResult < 18.5) {
                setCategory("Under Weight")

            } else if (bmiResult >= 18.5 || bmiResult <= 24.9) {
                setCategory("Healthy Weight")

            } else if (bmiResult >= 25.0 || bmiResult <= 29.9) {
                setCategory("Over Weight")
            } else {
                setCategory("Obesity Weight")
            }

        setLoading(false)

    }, [])



    const handleSignout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigation.replace("Login")
          }).catch((error) => {
            // An error happened.
            alert(error)
          });
    }

    return (
        <SafeAreaView style={{ backgroundColor: bgColor, flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                {
                    loading == true ?
                        <>
                            <ActivityIndicator />
                        </>
                        :
                        <>
                            <View style={styles.container}>
                                <Text style={{fontSize: 25, fontWeight: '800', textAlign: 'center'}}>Hi {name}</Text>
                                <Seperator/>
                                <Text style={{fontSize: 20, fontWeight: '500', textAlign: 'center'}}>Your BMI = {bmiResult}</Text>
                                <Seperator/>
                                <Text style={{fontSize: 20, fontWeight: '500', textAlign: 'center'}}>You are in the </Text>
                                <Seperator/>
                                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 20, fontWeight: '800', textAlign: 'center'}}>{category} </Text>
                                <Text style={{fontSize: 20, fontWeight: '500', textAlign: 'center'}}>Category</Text>
                                    </View>
                                <Seperator/>
                                <Seperator/>
                                <Button size='tiny' status='' onPress={handleSignout} >Logout</Button>
                            </View>
                        </>
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Result
