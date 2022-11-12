import { StyleSheet, TouchableOpacity, View, Image, SafeAreaView, ScrollView, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'


const RecipeDetails = ({ route, navigation }) => {
  const { id, data } = route.params;


  const ingredients = data.ingredients;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: data.title,
    })
  }, [navigation])

  return (
    <SafeAreaView>
      <ScrollView>
        <View>

          <Image
            resizeMode='cover'
            style={styles.heroImg}
            source={{ uri: data.imgUrl }}
          />

          <View style={{ margin: 5, marginTop: 10 }}>
            {/* <Text style={{fontSize: 18, fontWeight: '600'}}>{data.title}</Text> */}

            <Text style={{ fontWeight: '600', marginBottom: 10 }}>Ingredients :</Text>

            {
              ingredients?.map((ingredient) => (
                <Text style={{ marginLeft: 10 }}>- {ingredient}</Text>
              ))
            }

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>

              <Text >Time to cook </Text>
              <Text style={{fontWeight: '600'}}>{data.timeTaken}</Text>
              <Text> minutes</Text>
            </View>

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RecipeDetails

const styles = StyleSheet.create({
  heroImg: {
    width: '100%',
    height: 300
  }
})