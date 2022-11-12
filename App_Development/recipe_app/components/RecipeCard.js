import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const RecipeCard = ({id, data, showRecipeDetails}) => {


  console.log(typeof(data.imgUrl))
  return (
    <TouchableOpacity

      key={id}
      onPress={ () => showRecipeDetails(id, data)}
      style={styles.container}
    >
      <View>
      <Image 
      resizeMode='cover'
        source={{
          uri: data.imgUrl == undefined ? 'https://e7.pngegg.com/pngimages/854/415/png-clipart-recipe-cooking-chef-dish-food-cooking-food-recipe.png' : data.imgUrl}} 
          style={styles.img}
        />
      <Text style={styles.title}>{data.title}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default RecipeCard

const styles = StyleSheet.create({
  container:{
    margin: 8,
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: 'gray'
  }, 
  img:{
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    width: '100%',
    height: 200
  },
  title: {
    // marginTop: 3,
    // marginBottom: 3,
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  } 
})