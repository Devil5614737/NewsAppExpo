import { StyleSheet, Text, View,Image, Share } from 'react-native'
import React, { useContext } from 'react';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { NewsContext } from '../context/NewsContext';
import * as Haptics from "expo-haptics";





const NewsScreen = ({navigation}) => {
  const{specificNews}=useContext(NewsContext)
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
  });

  const handleShare = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    try {
      const result = await Share.share({
        message:specificNews.url,
        url: specificNews.url,
        title: specificNews.title,
      });
      console.log(result.action)
    } catch (error) {
      alert(error.message);
    }
  };



  if(!fontsLoaded){
    return <AppLoading/>
  }else{
    return (
      <View style={styles.container}>
        
         <Image style={styles.image} resizeMode='cover' source={{uri:specificNews&&specificNews.urlToImage}}/>
         <AntDesign onPress={()=>navigation.navigate('Home')} name="arrowleft" size={27} color="white" style={{
         position:"absolute",top:30,left:12}}/>
         <View style={styles.contentContainer}>
          <Text style={styles.title}>{specificNews&&specificNews.title}</Text>
          <Text style={styles.time}>Published at :{specificNews&&specificNews.publishedAt}</Text>
          <Text style={styles.content}>{specificNews&&specificNews.content||specificNews&&specificNews.description}</Text>
          <Entypo onPress={handleShare} style={{right:0,position:'absolute',bottom:-25,right:12}} name="share" size={28} color="#949494" />
         </View>
        
      </View>
    )
  }
 
}

export default NewsScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  image:{
    width:'100%',
    height:350
  },
  contentContainer:{
     marginTop:-42,
     backgroundColor:'white',
     borderRadius:13,
     padding:22
  },
  title:{
  fontFamily:"Montserrat_600SemiBold",
  fontSize:22,
  marginBottom:12
  },
  time:{
    marginBottom:12,
    fontFamily:"Montserrat_500Medium",
  },
  content:{
    fontFamily:"Montserrat_500Medium",
    fontSize:19,
    lineHeight:25,
    color:"#505050",
  }
})