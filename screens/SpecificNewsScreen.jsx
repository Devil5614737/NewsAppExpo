import { Linking, ScrollView, StyleSheet, Text, View } from "react-native";
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
import { NewsContext } from "../context/NewsContext";

const SpecificNewsScreen = () => {
  const {categoryNews} =useContext(NewsContext)
    let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  if(!fontsLoaded){
    return <AppLoading/>
  }else{

    return (
      <Screen style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {categoryNews.map((item,index)=>
            <View key={index} style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.desc}>
             {item.description}
            </Text>
            <Text style={styles.category}>Category:{item.category.toUpperCase()}</Text>
            <Text onPress={() => Linking.openURL(item.url)} style={styles.source}>source: {item.url}</Text>
          </View>)}
        </ScrollView>
      </Screen>
    );
  }
};

export default SpecificNewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    marginTop: 22,
    backgroundColor: "#F2F2F2",
  },
  card: {
    backgroundColor: "white",
    padding:17,
    marginBottom:22,
    borderRadius:7
  },
  title: {
    fontSize: 23,
    fontFamily:"Montserrat_600SemiBold",
    textAlign:'center',
    marginBottom:8
  },
  desc: {
    textAlign:'center',
    fontFamily:"Montserrat_500Medium",
    fontSize:16,
    marginBottom:8
  },
  source: {
    textAlign:'center',
    fontFamily:"Montserrat_600SemiBold",
    fontSize:16,
    color:'blue'
  },
  category: {
    textAlign:'center',
    fontFamily:"Montserrat_500Medium",
    fontSize:16,
    marginBottom:8,
  },
});
