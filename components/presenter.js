import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Dimensions } from 'react-native';
var {height, width} = Dimensions.get('window');
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './header';
import { useState } from 'react';
import { TextInput,Button,Pressable } from 'react-native';
import PresenterChat from './presenterchat';
export default function Presenter({navigation,control,setControl}) {

  var partId=0;

  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [connected,setconnected]=useState(false)
  const [roomName,setroomName]=useState("") 
 var roomid;

  const connect = async ()=>{

      let addPresenter=await fetch(

        'http://localhost:8080/api/presenters/add-presenter',
        
        {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
            mode:'no-cors',
          },
          body: JSON.stringify({name})  
        }
      )
      let data=await addPresenter.json();

      let addRoom= await fetch(
        'http://localhost:8080/api/rooms/add-room',
        {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
            mode:'no-cors',
          },       
            body: JSON.stringify({
              presenter:{
                id:data.id
              }
        }),

        })
        let resp=await addRoom.json();
        console.log('room', resp); 
        setconnected(true)

    navigation.navigate('PresenterChat',{
      name,roomid:resp.id,email,connected,partId
    });
  
  }
  return (
    <View style={styles.container}>
        
      <Header/>

      <View style={styles.center}>
      <View style={styles.div}> 

            <Text onPress={()=>{
                navigation.navigate('Partipicant');
            }}   style={styles.txt1}>Participant</Text>
        
            <View style={styles.verticleLine}></View>
            <Text style={styles.txt1}>Presenter</Text>



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
        marginTop: 25,
        padding:11,
        
    }}
    onChangeText={newText=> setname(newText)}
	  placeholder="Enter your nickname"
    />

{/* <Text style={styles.label}>Room ID</Text>
            <TextInput
      style={{ 
    	height: 40, 
        backgroundColor: 'white',
    	borderWidth: 0,
        borderRadius: 7,
        width:width*0.8,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop: 25,
        padding:11,
        
    }}
	  placeholder="J87a12CDa98"
    /> */}

<Pressable style={styles.btn} onPress={()=>{

  connect()
  
}}>
      <Text style={styles.btnTxt}>Create Session</Text>
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
    marginTop:height*0.06,
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
    marginTop:height*0.07
  },
  btnTxt:{
    color:'#FFD100',
  }

});
