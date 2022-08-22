import { Text, View,StyleSheet, Image, TouchableOpacity } from "react-native";
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat';
import AppLoading from "expo-app-loading";
import Swipeable from 'react-native-gesture-handler/Swipeable';

export const SavedCard=({renderRightActions,desc,image,title,id})=>{
    

    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
      });

      if(!fontsLoaded){
        return <AppLoading/>
      }else{

          return (
            <Swipeable renderRightActions={renderRightActions}>

            <View style={styles.card} >
             <View style={styles.left}>
               <Text numberOfLines={2} style={styles.title}>{title}</Text>
               <Text numberOfLines={2} style={styles.desc}>{desc}</Text>
             </View>
               <Image style={styles.image} source={{uri:image}} resizeMode='cover'/>
           </View>

            </Swipeable>
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
        overflow:"hidden"
    },
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