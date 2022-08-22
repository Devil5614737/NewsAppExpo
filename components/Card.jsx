import { Dimensions, Image, Share, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import { useContext } from "react";
import { NewsContext } from "../context/NewsContext";
import * as Haptics from "expo-haptics";


export const Card = ({
  title,
  description,
  image,
  publishedAt,
  handleFullArticle,
  item,
}) => {

const {handleSave}=useContext(NewsContext)
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  const handleShare = async () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    try {
      const result = await Share.share({
        message:item.url,
        url: item.url,
        title: item.title,
      });
      console.log(result.action)
    } catch (error) {
      alert(error.message);
    }
  };



  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.card}>
        <Image source={{ uri: image }} resizeMode="cover" style={styles.img} />

        <View style={styles.top}>
          <Text numberOfLines={2} style={styles.newsHeading}>{title}</Text>
          <Text style={styles.date}>{publishedAt}</Text>
        </View>
        <Text numberOfLines={4} style={styles.newsDesc}>
          {description}
        </Text>
        <View style={styles.bottom}>
          <View style={styles.left}>
            <Text
              onPress={() => handleFullArticle(item)}
              style={{
                fontFamily: "Montserrat_500Medium",
                color: "#7D24EF",
              }}
            >
              read more
            </Text>
            <AntDesign
              style={{ marginLeft: 3 }}
              name="arrowright"
              size={20}
              color="#7D24EF"
            />
          </View>
          <View style={styles.right}>
            <MaterialIcons
            onPress={()=>handleSave(item)}
              name="bookmark"
              size={22}
              color="#737373"
              style={{ marginRight: 12 }}
            />
            <Ionicons
              onPress={handleShare}
              name="share-social-sharp"
              size={22}
              color="#737373"
            />
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 13,
    padding: 15,
    width: Dimensions.get("window").width - 32,
    marginRight: 9,
    height: 450,
  },
  img: {
    width: "100%",
    height: 200,
    borderRadius: 13,
  },
  top: {
    marginTop: 12,
    marginBottom: 12,
  },
  newsHeading: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    marginBottom: 9,
  },
  date: {
    fontFamily: "Montserrat_500Medium",
    color: "grey",
    fontSize: 13,
  },
  newsDesc: {
    fontFamily: "Montserrat_500Medium",
    color: "#404040",
    fontSize: 13,
    lineHeight: 22,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    flexDirection: "row",

    alignItems: "center",
  },
});
