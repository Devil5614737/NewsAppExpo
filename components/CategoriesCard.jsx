import { View,Text, TouchableOpacity } from "react-native";
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  } from "@expo-google-fonts/montserrat";
  import AppLoading from "expo-app-loading";



export const CategoriesCard=({title,bg,handleSpecificNews})=>{

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
                <TouchableOpacity onPress={()=>handleSpecificNews(title)} style={{
                    width:'100%',
                    height:100,
                    backgroundColor:bg,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:5,
                    marginBottom:12
                }}>
                      <Text style={{
                          fontFamily:"Montserrat_600SemiBold",
                          fontSize:17,
                          color:"white"
                      }}>{title}</Text>
                    </TouchableOpacity>
            )
        }
}