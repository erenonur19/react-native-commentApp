import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Dimensions,Pressable } from 'react-native';
var {height, width} = Dimensions.get('window');
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import TickBox from './icons/tickBox';
import TickBoxChecked from './icons/tickBoxChecked';
export default function PresenterMsg({ participant, body, upVoteCount, id, partid, isAnswered}) {


  const [qId,setqId]=useState("")
  const[isAnsweredd,setisAnsweredd] = useState(false)
    return (
      

        <View style={styles.container}>
            <Text style={styles.text}>{participant.name} asks</Text>
            <View style={styles.textContainer}>
            <Text>{body}</Text>
           <View style={styles.rightSide}>
           <Pressable onPress={async()=>{

                let response = await fetch(
                    `http://localhost:8080/api/questions/set-answer/${id}`
                )
              .then(response => response.json())
              .then(data=>
                setisAnsweredd(data.status)
                // setisAnswered(data.status)
                )
  
           }}>
            {isAnswered? <TickBoxChecked/> : <TickBox/>}
            
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
    padding:8,
    flexDirection:'row', 
    justifyContent:'space-between',
    alignItems:'center',
    
    
  },
  rightSide:{
    padding:height*0.01,
  },

  upvote: {
    color:'red',
    paddingLeft:height*0.03,
  }

});
