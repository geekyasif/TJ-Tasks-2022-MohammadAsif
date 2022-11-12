import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {db} from '../.././firebase';
import RecipeCard from '../../components/RecipeCard';




const Home = ({navigation}) => {

    const[recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect( () => {

        const res = db.collection('recipes').onSnapshot((snapshot) => (
            setRecipes(snapshot.docs.map((doc) =>({
                id: doc.id,
                data : doc.data()
            })))
        ))
        setLoading(false)
        return res
        
    },[])

    const showRecipeDetails = (id, data) => {
        navigation.navigate('RecipeDetails', {
            id: id,
            data: data
        })

    }

  return (
            <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
             <ScrollView>

                {
                    loading ? <ActivityIndicator/> :
                    <View>
                        {
                            recipes?.map( ({id, data}) => ( <RecipeCard key={id} id={id} data={data} showRecipeDetails={showRecipeDetails}/> ))
                        }
                    </View>
                }
            
            </ScrollView>
            </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})