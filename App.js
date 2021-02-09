import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { View, StyleSheet, Text } from 'react-native'
import { Provider } from 'react-redux'
import reducers from './src/reducers'
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import Icon from 'react-native-vector-icons/Ionicons'
import { setNavigator } from './src/navigationRef'

const store = createStore(reducers, {}, applyMiddleware())

import { FontAwesome, AntDesign, Ionicons } from '@expo/vector-icons';
import {
  HomeScreen,
  ExploreScreen,
  CreateScreen,
  ActivityScreen,
  ProfileScreen,
  AuthorScreen,
  CategoryScreen,
  AuthorListScreen,
  SettingsScreen,
  CommunityScreen
} from './src/settings/NavigationOptions'

// import AuthorScreen from './src/screens/Home/authors/AuthorScreen'

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

// const navigator = createStackNavigator({
//   Index:Home,
//   Explore: Explore,
//   Profile: Profile
// }, {
//   initialRouteName: 'Index',
//   defaultNavigationOptions: {
//     title: 'Home'
//   }
// })


const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 10
  }
})



const homeFlow = createStackNavigator(
  {
    Home: HomeScreen,
    Author: AuthorScreen,
    AuthorList: AuthorListScreen,
    Community: CommunityScreen
  },
  {
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 9  }} >Home</Text>,
      tabBarIcon: ({ tintColor }) => <AntDesign name="home" size={24} color={tintColor} />,
      
    }
  }
)

const exploreFlow = createStackNavigator(
  {
    Explore: ExploreScreen,
    Category: CategoryScreen
  },
  {
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 9 }} >Discover</Text>,
      tabBarIcon: ({ tintColor }) => <AntDesign name="search1" size={24} color={tintColor} />
      
    }
  }
)

const activityFlow = createStackNavigator(
  {
    Activity: ActivityScreen,
    Community: CommunityScreen
  },
  {
    navigationOptions: {
      tabBarLabel: <Text  style={{ fontSize: 9 }}  >Communities</Text>,
      // tabBarIcon: ({ tintColor }) => <Icon style={[{color: tintColor}]} size={25} name={'heart-outline'} />,
      tabBarIcon: ({ tintColor }) => <Ionicons style={[{color: tintColor}]} name="ios-people-outline" size={25} />,
      headerShown: false,
      
    }
  }
)


const profileFlow = createStackNavigator(
  {
    Profile: ProfileScreen,
    Settings: SettingsScreen
  },
  {
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 9 }} >Me</Text>,
      tabBarIcon: ({ tintColor }) => <Ionicons style={[{color: tintColor}]} name="person-outline" size={24} />,
      
    }
  }
)





const switchNavigator = createSwitchNavigator({

  mainFlow: createMaterialBottomTabNavigator(
    {
      Home:  homeFlow,
      Explore: exploreFlow,
      Create: CreateScreen,
      Activity: activityFlow,
      Profile: profileFlow
    },
    {
      initialRouteName: 'Home',
      // labeled: false,
      shifting: false,
      activeColor: 'black',
      inactiveColor: 'rgba(0,0,0,0.3)',
      barStyle: {backgroundColor: '#fff'}
    }
  )
  
})


const App = createAppContainer(switchNavigator)

export default () => {
  return(
    <Provider store={store}>
      <App ref={(navigator) => { setNavigator(navigator) }} />
    </Provider>
    
  )
}