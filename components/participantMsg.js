import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Dimensions } from 'react-native';
var {height, width} = Dimensions.get('window');
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function ParticipantMsg() {
    return (
        <View style={styles.container}>
            <Text>eren asks</Text>
            <View style={styles.textContainer}>
            <Text>Merhaba</Text>
            <Text>+</Text>
            </View>
            
         
          </View>


      );
      }

    const styles = StyleSheet.create({
    
  container:{
    marginTop: 3,
    padding:15,
    height:height*0.08,
    
  },
  textContainer:{
    backgroundColor:'#FFFFFF',
    height:height*0.06,
    borderRadius:10,
    padding:8,
    flexDirection:'row', 
    justifyContent:'space-between',
    alignItems:'center',
    
  }
});
