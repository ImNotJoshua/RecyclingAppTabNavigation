import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/homeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScannerScreen from './Screens/scannerScreen';
import Ionicons from "react-native-vector-icons/Ionicons"
import {RFValue} from "react-native-responsive-fontsize"

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route})=>({
        tabBarIcon: ({focused,color,size})=>{
          let iconName;
          if(route.name==='Scanner'){
            iconName=focused?"camera":"camera-outline"
          }
          else if(route.name==="Contacts"){
            iconName=focused?"peope":"people-outline"
          }
           return(<Ionicons name={iconName} size={RFValue(25)} color={color} styles={styles.icons}/>)
        }
      })}
      activeColor={"green"} inactiveColor={"grey"} labeled={false} barStyle={styles.bottomTabStyle}>
        <Tab.Screen name="Scanner" component={ScannerScreen} />
        <Tab.Screen name="Contacts"  component={ContactScreen} />
      </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTabStyle: {
    height: "8&",
    overflow: "hidden",
    position: "absolute",
    backgroundColor: "black",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30),
  }
});
