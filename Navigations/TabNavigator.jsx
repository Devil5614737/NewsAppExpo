import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat';
import AppLoading from "expo-app-loading";
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import CategoriesScreen from "../screens/CategoriesScreen";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import SavedScreen from "../screens/SavedScreen";


export const TabNavigator = () => {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
      });


  const Tab = createBottomTabNavigator();

  if (!fontsLoaded) {
    return <AppLoading />;
  }else{
    return (
 

        <Tab.Navigator
      
        screenOptions={{headerShown:false,
        tabBarActiveTintColor:"black",
        tabBarInactiveTintColor:'grey',
        tabBarStyle:{
          height: 70,
          width: '100%',
            backgroundColor:"white",
            borderRadius:14,
            paddingBottom:12

        },
        tabBarLabelStyle:{
          fontSize:13,
          fontFamily:"Montserrat_500Medium",
          
        }
       }} 
       

       >
          <Tab.Screen
           name='Home'
            component={HomeScreen}
            options={{
              tabBarIcon:({size,color})=><Entypo name="home" color={color} size={size}/>
            }}
            />
          <Tab.Screen name='Search' component={SearchScreen}
          options={{
            tabBarIcon:({size,color})=><Feather name="search" size={size} color={color} />
            
          }}
          />
          <Tab.Screen  name='Browse' component={CategoriesScreen}
          options={{
            tabBarIcon:({size,color})=><Ionicons name="compass" size={size} color={color} />
            
          }}
          />
          <Tab.Screen  name='Saved' component={SavedScreen}
          options={{
            tabBarIcon:({size,color})=><Ionicons name="md-bookmarks" size={size} color={color} />
            
          }}
          />
         
   
        </Tab.Navigator>
     

  );
  }
  
  
 
};
