import CategoriesScreen from './screens/CategoriesScreen';
import HomeScreen from './screens/HomeScreen';
import NewsScreen from './screens/NewsScreen';
import SavedScreen from './screens/SavedScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from './screens/SearchScreen';
import MainScreen from './screens/MainScreen';
import { NewsContextProvider } from './context/NewsContext';
import SpecificNewsScreen from './screens/SpecificNewsScreen';
import { StatusBar } from 'expo-status-bar';




export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>

<StatusBar style='dark' animated translucent />
   <NewsContextProvider>
   <NavigationContainer >
      <Stack.Navigator screenOptions={{animation:"fade_from_bottom",headerShown:false}}>
        <Stack.Screen name='Main' component={MainScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Search' component={SearchScreen}/>
        <Stack.Screen name='News' component={NewsScreen}/>
        <Stack.Screen name='Categories' component={CategoriesScreen}/>
        <Stack.Screen name='Saved' component={SavedScreen}/>
        <Stack.Screen name='SpecificNews' component={SpecificNewsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
   </NewsContextProvider>


    </>
  );
}


