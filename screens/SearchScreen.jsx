import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Screen } from "../components/Screen";
import { AntDesign } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import axios from "axios";
import { NewsContext } from "../context/NewsContext";

export default function SearchScreen({ navigation }) {
  const { setSpecificNews } = useContext(NewsContext);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
  });

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        try{

            const result = await axios.get(
              `https://newsapi.org/v2/everything?q=${query}&from=2022-08-22&sortBy=popularity&apiKey=0ed476327e4444e792543bbb41e45210`
            );
            setSearchResults(result.data.articles);
        }catch(e){
            console.log(e)
        }
      }
      fetchData();
    }else if(!query){
        setSearchResults([])
    };
  }, [query]);






  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Screen style={styles.container}>
        <View style={styles.searchBox}>
          <TextInput
            value={query}
            onChangeText={text=>setQuery(text)}
            placeholder="search news"
            style={styles.input}
            placeholderTextColor="grey"
          />
          <AntDesign name="search1" size={20} color="#606060" />
        </View>
        <ScrollView style={styles.resultContainer}>
          {searchResults &&
            searchResults.map((item) => (
              <TouchableOpacity
              key={item.title}
                onPress={() => {
                  setSpecificNews(item);
                  navigation.navigate("News");
                }}
                style={styles.card}
              >
                <Text style={styles.title}>{item.title}</Text>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={{ uri: item.urlToImage }}
                />
              </TouchableOpacity>
            ))}
        </ScrollView>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    padding: 12,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    height: 60,
    borderRadius: 6,
    padding: 12,
    fontSize: 12,
  },
  input: {
    fontFamily: "Montserrat_600SemiBold",
    width: "90%",
  },
  resultContainer: {
    marginTop: 22,
  },
  card: {
    backgroundColor: "white",
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    borderRadius: 7,
  },
  title: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 14,
    maxWidth: "80%",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 7,
  },
});
