import { Image, Text, View ,StyleSheet, TouchableOpacity} from "react-native";
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import AppLoading from "expo-app-loading";



export const HeadlineCard=({title,description,image,handleFullArticle,item})=>{
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
      });

      if(!fontsLoaded){
        return <AppLoading/>
      }else{
        return(
           <TouchableOpacity onPress={()=>handleFullArticle&&handleFullArticle(item)}>
             <View style={styles.card} >
              <View style={styles.left}>
                <Text numberOfLines={2} style={styles.title}>{title}</Text>
                <Text numberOfLines={2} style={styles.desc}>{description}</Text>
              </View>
                <Image style={styles.image} source={{uri:image}} resizeMode='cover'/>
            </View>
           </TouchableOpacity>
        )
      }
   
}


const styles=StyleSheet.create({
card:{
    backgroundColor:"white",
    padding:12,
    borderRadius:8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:32,

},
left:{},
title:{
    fontFamily:"Montserrat_600SemiBold",
    fontSize:16,
    maxWidth:"80%",
    marginBottom:8,
    color:"#333333"
},
desc:{
    maxWidth:'80%',
    fontFamily:"Montserrat_500Medium",
    color:"#303030"
},
image:{ 
    width:70,
    height: 70,
    borderRadius:8
}
})