import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Dimensions,Pressable,TextInput } from 'react-native';
var {height, width} = Dimensions.get('window');
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ParticipantMsg from './participantMsg';
export default function ParticipantChat() {
    return (
        <View style={styles.container}>

         <View style={styles.header}>
            <Text style={styles.title}>Sample Presenter's Session</Text>
         </View>

         <View style={styles.chat}>
        <View  style={styles.chatItems}>
        <ParticipantMsg></ParticipantMsg>
        <ParticipantMsg></ParticipantMsg>
        <ParticipantMsg></ParticipantMsg>
        </View>
        


         </View>
         <View style={styles.input}>

         <TextInput
      style={{ 
    	height: 40, 
        backgroundColor: '#D6D6D6',
    	borderWidth: 0,
        borderRadius: 7,
        width:width*0.78,
        padding:11,


  
        
    }}
	  placeholder="Enter your comment"
    />
            <Pressable onPress={()=>{
  navigation.navigate('ParticipantChat');
}} style={styles.btn}>
      <Text style={styles.btnTxt}>Send</Text>
    </Pressable>

         </View>
          </View>


      );
      }

    const styles = StyleSheet.create({
        title:{
            color:'#FFD100'
        },
        header:{
            height:height*0.1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop:height*0.04,
            color: '#FFFFFF',

        },
        container:{
            backgroundColor: '#333533',
            height:height*1.2,
            width:width*1,
        
        },
        chat:{

            backgroundColor:'#D6D6D6',
            height:height*0.84,

        },
        input:{
            flexDirection:'row',
            alignItems: 'center',
            height:height*0.1,
            paddingHorizontal:15,
            textAlign:'center',
            justifyContent: 'space-between',

        },

});
