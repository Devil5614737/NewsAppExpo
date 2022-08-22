import { AsyncStorage } from "react-native"

const key='user'

const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      console.log(e)
    }
  }



  
const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      console.log(e)
    }
  }


  const removeData=async()=>{
    try {
        await AsyncStorage.removeItem(key)
      } catch(e) {
        console.log(e)
      }
  }

  export {storeData,getData,removeData}