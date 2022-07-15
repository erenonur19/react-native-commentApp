import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Dimensions } from 'react-native';
var {height, width} = Dimensions.get('window');
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './header';
import { TextInput,Button,Pressable } from 'react-native';
import ParticipantChat from './participantchat';
import { useState } from 'react';
import { parse } from 'react-native-svg';
export default function Partipicant({navigation,control,setControl}) {

  // var partId=0;

  const [name,setname]=useState("")
  const [roomid,setroomid]=useState("")
  const [email,setemail]=useState("")
  const [connected,setconnected]=useState(false)
  // const[roomName,setroomName]=useState("")
  // const [participantId,setParticipantId]=useState("0")
  // const [roomName,setroomName]=useState("")
  var roomName;

  const connect = async () => {
    let res = await fetch(
      `http://localhost:8080/api/rooms/get-room-by-id/${roomid}`
    )
    .then(res=>res.json())
    .then(data=>{
     roomName=data.presenter.name
    })

    let response = await fetch(
      `http://localhost:8080/api/rooms/get-room-by-id/${roomid}`
    )
    if (response.status === 200) {
      let addParticipantResponse = await fetch(
        `http://localhost:8080/api/participants/add-participant`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email }),
        }
      );
      let participantResponse = await addParticipantResponse.json();

      if (addParticipantResponse.status === 200) {
      
        setconnected(true)
        
        navigation.navigate('ParticipantChat', {name, roomid,email,connected,partId:participantResponse.id,roomName})
      } else {
        console.log('This email already been taken');
      }
    }
    if (response.status === 500) {
      console.log('There is no such a room !');
    }
   }

  


  return (
    <View style={styles.container}>
        
      <Header/>

      <View style={styles.center}>
      <View style={styles.div}> 

            <Text style={styles.txt1}>Participant</Text>
        
            <View style={styles.verticleLine}></View>
            <Text onPress={()=>{

              navigation.navigate('Presenter');
                
            }} style={styles.txt1}>Presenter</Text>



            </View>
            <View style={styles.downside}>
            <Text style={styles.label}>Email</Text>
                    <TextInput
                      style={{ 
                      height: 40, 
                        backgroundColor: 'white',
                      borderWidth: 0,
                        borderRadius: 7,
                        width:width*0.8,
                        marginLeft:'auto',
                        marginRight:'auto',
                        marginTop: 8,
                        padding:11,
                        
                    }}
                      onChangeText={newText=> setemail(newText)}
                      placeholder="Enter your email"
                      />



            <Text style={styles.label}>Nickname</Text>
            <TextInput
      style={{ 
    	height: 40, 
        backgroundColor: 'white',
    	borderWidth: 0,
        borderRadius: 7,
        width:width*0.8,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop: 8,
        padding:11,
        
    }}
    onChangeText={newText=> setname(newText)}
	  placeholder="Enter your nickname"
    />
    

<Text style={styles.label}>Room ID</Text>
            <TextInput
      style={{ 
    	height: 40, 
        backgroundColor: 'white',
    	borderWidth: 0,
        borderRadius: 7,
        width:width*0.8,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop: 8,
        padding:11,
        
    }}
    onChangeText={newText=> setroomid(newText)}
	  placeholder="Enter room ID"
    />

<Pressable onPress={()=>{

  connect()


  
}} style={styles.btn}>
      <Text style={styles.btnTxt}>Join Session</Text>
    </Pressable>

            </View>

      </View>
      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    width:'100%',
    backgroundColor: '#333533',
  },
  image:{

    marginLeft:'auto',
    marginRight:'auto',
    marginTop:height*0.06,

  },

  text:{
    color:'#FFD100',
    textAlign:'center',
    paddingTop:height*0.03,
    paddingBottom:height*0.05,
    fontSize:height*0.02,
  },

  div:{
    paddingTop:height*0.04,
    flexDirection:"row",
    backgroundColor:'#FFD100',
    height:height*0.09,
    justifyContent: 'space-between',
    borderRadius:39,
  },
  txt1:{
    height:height*0.07,
    fontSize:22,
    width:width*0.5,
    textAlign:'center',
    
   
  },
  downside:{
    marginTop:height*0.02,
    backgroundColor:'#FFD100',
    height:height*0.05,
  },

  center:{
    height:height*0.70,
    backgroundColor:'#FFD100',
    borderRadius:39,
    paddingTop:height*0.01
    
  },
  label:{
    marginTop:height*0.03,
    marginLeft:width*0.1
  },
  verticleLine:{
    height: '95%',
    width: 1,
    backgroundColor: '#000000',

  },
  btn:{
    display:'flex',
    alignItems:'center',
    borderRadius: 4,
    backgroundColor: '#333533',
    paddingVertical: 12,
    justifyContent: 'center',
    height: 40,
    width:width*0.5,
    borderRadius: 4,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:height*0.05
  },
  btnTxt:{
    color:'#FFD100',
  }

});
