import { ScrollView, StyleSheet, View, ActivityIndicator} from 'react-native'
import React, { useContext } from 'react';
import {Screen} from '../components/Screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { SavedCard } from '../components/SavedCard';
import { NewsContext } from '../context/NewsContext';

export default function SavedScreen() {
const {savedNews,handleRemoveSavedNews}=useContext(NewsContext);
  return (
  <Screen style={styles.container}>
    <ScrollView style={styles.newsListContainer} showsVerticalScrollIndicator={false}>
      <GestureHandlerRootView>

    {savedNews.length<=0?<ActivityIndicator size="large" color="#7D24EF" />:savedNews&&savedNews.map((item,index)=><SavedCard
     id={index}
     title={item.title}
     image={item.urlToImage}
     desc={item.description}
    renderRightActions={()=>
    <View style={{
      backgroundColor:'#ED4C67',
      width:100,
      height:105,
      borderRadius:6,
      justifyContent:'center',
      alignItems:'center',
     
    }}>
      <Feather onPress={()=>handleRemoveSavedNews(index)} name="trash-2" size={28} color="white" />
    </View>}/>)}
      </GestureHandlerRootView>
    </ScrollView>
  </Screen>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:14,
    flex:1,
    backgroundColor:"#F2F2F2",
  },
  newsListContainer:{
    marginTop:32,

  }
})