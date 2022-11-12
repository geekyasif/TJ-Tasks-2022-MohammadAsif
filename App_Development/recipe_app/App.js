import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home/Home';
import RecipeDetails from './screens/recipe/RecipeDetails';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <StatusBar style='auto'/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              title: "Recipe Maker",
              // headerTitleAlign: 'left', //moved this from headerStyle property
              // headerStyle: {
              //   backgroundColor: '#fff',
              // },
              // headerTintColor: 'blue',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            name="Home"
            component={Home}
          />
          <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
        </Stack.Navigator>

      </NavigationContainer>
    </ApplicationProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
