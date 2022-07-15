import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Dimensions,Pressable,TextInput, FlatList } from 'react-native';
var {height, width} = Dimensions.get('window');
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ParticipantMsg from './participantMsg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Send from './icons/send'
import  Svg, {Path} from 'react-native-svg';

export default function ParticipantChat(props) {
    const name=props.route.params.name;
    const roomid=props.route.params.roomid;
    const email=props.route.params.email;
    const connected=props.route.params.connected;
    const participantId=props.route.params.partId;
    const roomName=props.route.params.roomName;

    const [questions, setQuestions] = useState([]);

    const [msg,setMsg]=useState('')


   


    const headers = {
        "Content-Type": "application/json",
        mode:'no-cors',
      };

    
    const getMessages= async () =>{

        try{
            const response=await axios.get(`http://localhost:8080/api/questions/get-questions-by-room-id/${roomid}`,{headers});
    
            setQuestions(response.data)
        }
        catch(e){
            console.log(e)
        }
        

    }

    useEffect(()=>{
        const interval=setInterval(()=>{
            getMessages();
        },1000);

        return()=>clearInterval(interval);
    },[])


    // async function sendMessage(){
    //     try{
    //         await fetch('https://webhook.site/06d23046-1778-4b4f-a4bd-a54e1f1e0102', {
    //             method: 'post',
    //                 mode:'no-cors',
    //                 headers: {
    //                     'Accept': 'application/json',
    //                     'Content-Type': 'application/json',

    //                     },
    //                     body: JSON.stringify({
    //                         username:'username',
    //                         msg
    //                         })
    //         })
    //     }
    //     catch(error){
    //         console.log(error)
    //     }
    // }

    async function sendMessage(){
        if(msg.length===0) return;
        setMsg('')
        let question={
            question:msg,
            participant:{id:  participantId },
            status:'MESSAGE',
        };

        let response= await fetch(

            `http://localhost:8080/api/questions/addMessage/${roomid}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(question),
        }

        )
        

        // let data = await response.json()
        
    
        
    }
        


    // async function fetchMessages() {
    //     const response=await axios.get('https://jsonplaceholder.typicode.com/comments?postId=7');
    //     setMessageList(response.data);
    // }

    const renderMessages=({item})=><ParticipantMsg body={item.question} participant={item.
    participant} id={item.id} upVoteCount={item.votedParticipants.length} partid={participantId} isAnswered={item.answered} />
    

    return (
        <View style={styles.container}>

         <View style={styles.header}>
            <Text style={styles.title}>{roomName}'s Session</Text>
         </View>

         <View style={styles.chat}>
        <View  style={styles.chatItems}>
        <FlatList style={styles.chatItems} data={questions} renderItem={renderMessages}/>
        </View>
        


         </View>
         <View style={styles.input}>

         <TextInput
         value={msg}
      style={{ 
    	height: 40, 
        backgroundColor: '#FFFFFF',
    	borderWidth: 0,
        borderRadius: 7,
        width:width*0.78,
        padding:11,
              
    }}
    // onChange={(e)=> setMsg(e.target.value)}
     onChangeText={newText=> setMsg(newText)}
	  placeholder="Enter your comment"
    />
            <Pressable onPress={sendMessage} 
            style={styles.btn}>
      <Send/>
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
            paddingBottom: height*0.04,
            
        
        },
        chat:{
            
            backgroundColor:'#D6D6D6',
            height:height*0.84,

        },
        input:{
            flexDirection:'row',
            alignItems: 'center',
            height:height*0.1,
            paddingHorizontal:10,
            textAlign:'center',
            justifyContent: 'space-between',
           

        },
        btn:{
            flex:1,
            height:height*0.2,
            width:width*0.5,
            alignItems: 'center',
            justifyContent: 'center',
           
            
        }

});
