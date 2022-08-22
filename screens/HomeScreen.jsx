import { Dimensions, ScrollView, StyleSheet, Text, View,RefreshControl } from 'react-native'
import React, { useContext, useEffect } from 'react';
import {Screen} from '../components/Screen';

import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import { Card } from '../components/Card';
import { HeadlineCard } from '../components/HeadlineCard';
import { NewsContext } from '../context/NewsContext';
import axios from 'axios';
import {FETCH_NEWS_ARTICLES, FETCH_TOP_HEADLINES} from '../assets/api'





export default function HomeScreen({navigation}) {
  const {newsArticles,setNewsArticles,setTopHeadlines,topHeadlines,setSpecificNews}=useContext(NewsContext)
  const [refreshing, setRefreshing] = React.useState(false);

    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
      });





const fetchArticles=async()=>{
  const {data}=await axios.get(FETCH_NEWS_ARTICLES);
 setNewsArticles(data.articles.slice(0,250))
}
const fetchTopHeadlines=async()=>{
  const {data}=await axios.get(FETCH_TOP_HEADLINES);
  setTopHeadlines(data.articles);
}
      useEffect(()=>{
      fetchArticles();
      fetchTopHeadlines();
      },[])

      const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }


const handleFullArticle=(item)=>{
  setSpecificNews(item)
navigation.navigate("News")
}

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => {
      fetchArticles();
      fetchTopHeadlines();
      setRefreshing(false)});
  }, []);

      if(!fontsLoaded){
        return <AppLoading/>
      }else{
        return (
            <Screen style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.logo}>NewsBreak</Text>
            </View>
            <ScrollView 
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />} 
              showsVerticalScrollIndicator={false}>
            <ScrollView style={styles.cardContainer} horizontal={true}>
              {newsArticles.map((item,index)=>
              <Card key={index} title={item.title}
              description={item.description}
              item={item}
             image={item.urlToImage}
             publishedAt={item.publishedAt}
              handleFullArticle={handleFullArticle}
              />
                )}
         
            </ScrollView>
            <View style={styles.headlineContainer}>
                <Text style={styles.headlineTitle}>Top Headlines</Text>
                {topHeadlines.map((item,index)=>
                     <HeadlineCard key={index} title={item.title} description={item.description} image={item.urlToImage} item={item}     handleFullArticle={handleFullArticle}/>
                  )}
            </View>
            </ScrollView>
            </Screen>
          )
      }
    
}

 


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F2F2F2",
        padding:14
    },
    topBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
paddingBottom:18
    },
    logo:{
fontSize:19,
fontFamily:"Montserrat_600SemiBold",

    },
    avatar:{
        width: 40,
        height:40,
        borderRadius:25
    },
    cardContainer:{
        marginTop:22,
        // borderWidth:2,
        // borderColor:"black",
        width:Dimensions.get('window').width,
    },
    headlineContainer:{
  marginTop:22,

    },
    headlineTitle:{
    fontFamily:"Montserrat_600SemiBold",
    fontSize:18,
    marginBottom:15,
    color:"#282828"
    }
})