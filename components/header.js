import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Dimensions } from 'react-native';
var {height, width} = Dimensions.get('window');
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function Header() {
    return (
        <View style={styles.container}>
          <Image style={styles.image}source={require("../assets/logo.png")} />
          <Text style={styles.text}>Join a session or create one!</Text>
          <StatusBar style="auto" />
         
          </View>


      );
      }

    const styles = StyleSheet.create({
        image:{

            marginLeft:'auto',
            marginRight:'auto',
            marginTop:height*0.06,
        
        },
        
    text:{
    color:'#FFD100',
    textAlign:'center',
    paddingTop:height*0.02,
    paddingBottom:height*0.05,
    fontSize:height*0.02,
  },     
  container:{
    height:height*0.4,
  }
});
