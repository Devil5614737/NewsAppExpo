import {StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Screen } from "../components/Screen";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

import { CategoriesCard } from "../components/CategoriesCard";
import axios from "axios";
import { NewsContext } from "../context/NewsContext";

const CategoriesScreen = ({navigation}) => {
  const {setCategoryNews}=useContext(NewsContext)
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  const handleSpecificNews=(title)=>{
    axios.get(`https://newsapi.org/v2/top-headlines/sources?category=${title}&country=us&apiKey=0ed476327e4444e792543bbb41e45210`).then(res=>setCategoryNews(res.data.sources)).catch(error=>console.log(error))
    navigation.navigate("SpecificNews")

  }


  if(!fontsLoaded){
    return <AppLoading/>
  }else{
    return (
        <Screen style={styles.container}>
          <Text style={styles.title}>Categories</Text>
          <View style={styles.categories}>
          <CategoriesCard bg='#ED4C67' title='Entertainment' handleSpecificNews={handleSpecificNews}/>
          <CategoriesCard bg='#6F1E51' title='Business' handleSpecificNews={handleSpecificNews}/>
          <CategoriesCard bg='#5758BB' title='General' handleSpecificNews={handleSpecificNews}/>
          <CategoriesCard bg='#F79F1F' title='Health' handleSpecificNews={handleSpecificNews}/>
          <CategoriesCard bg='#B53471' title='Science' handleSpecificNews={handleSpecificNews}/>
          
            
          </View>
        </Screen>
      );
  }

 
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontFamily:"Montserrat_600SemiBold",
    fontSize:22
  },
  categories:{
marginTop:42
  },

});
