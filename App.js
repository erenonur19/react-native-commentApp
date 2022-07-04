import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Dimensions } from 'react-native';
var {height, width} = Dimensions.get('window');
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import Partipicant from './components/participant';
import Presenter from './components/presenter';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import ParticipantChat from './components/participantchat';
import PresenterChat from './components/presenterchat';


const Stack = createNativeStackNavigator();


export default function App() {
  const[control,setControl]=useState(true)
  return (
    // <View>
    //    {control ? <Partipicant control={control} setControl={setControl}></Partipicant> : <Presenter control={control} setControl={setControl}></Presenter>}
    // </View>
    <NavigationContainer style={styles.container} >
      <Stack.Navigator
      initialRouteName='Partipicant'
      
      >
        <Stack.Screen name="Partipicant" 
        component={Partipicant}
        options={{headerShown: false}}
        control={control} 
        setControl={setControl}
         />
         <Stack.Screen name="Presenter" 
        component={Presenter}
        options={{headerShown: false}}
        
         />
         <Stack.Screen name="ParticipantChat" 
        component={ParticipantChat}
        options={{headerShown: false}}
         />
         <Stack.Screen name="PresenterChat" 
        component={PresenterChat}
        options={{headerShown: false}}
         />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
  navigator: {
    backgroundColor: '#333533',
  }
  
});
