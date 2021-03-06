import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Dimensions,Pressable } from 'react-native';
var {height, width} = Dimensions.get('window');
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import  Svg, {Path} from 'react-native-svg';
import Like from './icons/like'
import Unlike from './icons/unlike'



export default function ParticipantMsg({ participant, body, upVoteCount, id, partid, isAnswered}) {


  const [qId,setqId]=useState("")
  const[isVoted,setisVoted] = useState(false)




    return (
      

        <View style={styles.container}>
          <View style={styles.name}>
          <Text style={styles.text}>{participant.name}</Text>
          <Text>  asks</Text>
          {isAnswered ? <Text style={{color:'red', marginRight: width*0.5}}>  Answered</Text> : <Text style></Text>}
          </View>
            <View style={styles.textContainer}>
            <Text style={[isAnswered ? styles.gray : styles.black]}>{body}</Text>
          
           
            
           <View style={styles.rightSide}>
           <Pressable onPress={async()=>{

              let response = await fetch(
                `http://localhost:8080/api/questions/vote-question/${partid}/${id}`
              )
              .then(response => response.json())
              .then(data=>
                setisVoted(data.status)
                )
  
           }}>
            {isVoted ? <Unlike/> : <Like/>}
           </Pressable>
           <Text style={styles.upvote}>
              {upVoteCount}
            </Text>
            
           </View>
            
            
            </View>
            
            
         
          </View>


      );
      }

    const styles = StyleSheet.create({
    
  text:{
    marginBottom: height*0.005,
    fontWeight: 'bold',
  },    
  container:{
    padding:height*0.01,
    marginBottom: height*0.01,
    height:height*0.1,
    
  },
  textContainer:{
    backgroundColor:'#FFFFFF',
    height:height*0.07,
    borderRadius:10,
    padding:11,
    flexDirection:'row', 
    justifyContent:'space-between',
    alignItems:'center',
    
    
  },
  rightSide:{
    flexDirection:'column',
    padding:height*0.01,
  },

  upvote: {
    color:'#F44336',
    paddingLeft:height*0.03,

  },
  
  name:{
    flexDirection:'row',
  },

  gray:{
    color:'#D3D3D3',
    
  },
  black:{
    color:'#000000',
  }

});
