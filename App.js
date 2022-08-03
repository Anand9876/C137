import React,{Component} from 'react';
import { View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Home from './screens/Home'
import DetailsScreen from './screens/details';

export default function App(){
  return <AppContainer/>
}

const AppStackNavigator=createStackNavigator({
  Home:{screen:Home,navigationOptions:{headerShown:false}},
  DetailsScreen:{screen:DetailsScreen}},{initialRouteName:Home}
 
)

const AppContainer=createAppContainer(AppStackNavigator);
