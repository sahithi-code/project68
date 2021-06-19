
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Instagram from './screens/instapage';
import FaceBook from './screens/facebookpage';
export default class App extends React.Component{
  render(){
  return (
    <View >
      <AppContainer/>
    </View>
  );
}}

const TabNavigator =  createBottomTabNavigator({
Instagram:{screen:Instagram},
FaceBook:{screen:FaceBook}
  
})
const AppContainer = createAppContainer(TabNavigator)
