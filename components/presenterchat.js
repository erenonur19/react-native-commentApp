import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Dimensions,Pressable,TextInput,FlatList } from 'react-native';
var {height, width} = Dimensions.get('window');
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PresenterMsg from './presenterMsg';
import { useState,useEffect } from 'react';

export default function PresenterChat(props) {

    const name=props.route.params.name;
    const roomid=props.route.params.roomid;
    const email=props.route.params.email;
    const connected=props.route.params.connected;
    const [questions, setQuestions] = useState([]);

    const getMessages=async()=>{
        let response= await fetch(
            `http://localhost:8080/api/questions/get-questions-by-room-id/${roomid}`
        );
        let data= await response.json()
        setQuestions(data)
    }

    useEffect(() => {
        const interval = setInterval(() => {
    
          getMessages()
            
        }, 1000);
        return()=>clearInterval(interval);
    },[])

    const renderMessages=({item})=><PresenterMsg body={item.question} participant={item.
        participant} id={item.id} upVoteCount={item.votedParticipants.length} partid={item.participant.id} isAnswered={item.answered}/>
    return (
        <View style={styles.container}>

         <View style={styles.header}>
            <Text style={styles.title}>{roomid}</Text>
         </View>

         <View style={styles.chat}>
        <View  style={styles.chatItems}>
        <FlatList style={styles.chatItems} data={questions} renderItem={renderMessages}/>
        </View>
        


         </View>
         <View style={styles.input}>

                <Pressable onPress={()=>{
                navigation.navigate('ParticipantChat');
                }} style={styles.btn}>
                     <Text style={styles.btnTxt}>End Session</Text>
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
            textAlign:'center',
            justifyContent: 'center',

        },
        btn:{
            backgroundColor:'#FFD100',
            padding: 15,
            borderRadius:10,
            width:width*0.38,

        },
        btnTxt:{
            textAlign:'center',
            fontWeight:'bold',
        }

});
