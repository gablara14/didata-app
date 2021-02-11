import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { setNavigator } from './src/navigationRef'
import {
  homeOptions,
  exploreOptions,
  activityOptions,
  profileOptions
} from './src/settings/NavigationOptions'
import ResolveAuthScreen from './src/screens/Auth/ResolveAuthScreen' 
import RegisterOrLoginScreen  from './src/screens/Auth/RegisterOrLoginScreen'
import SigninScreen from './src/screens/Auth/SigninScreen'
import SignUpScreen from './src/screens/Auth/SignupScreen'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

const homeFlow = createStackNavigator(homeOptions.screens, homeOptions.options)
const exploreFlow = createStackNavigator(exploreOptions.screens, exploreOptions.options)
const activityFlow = createStackNavigator(activityOptions.screens, activityOptions.options)
const profileFlow = createStackNavigator(profileOptions.screens, profileOptions.options)


const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    RegisterOrLogin: RegisterOrLoginScreen,
    SignIn: SigninScreen,
    SignUp: SignUpScreen
  }),
  mainFlow: createMaterialBottomTabNavigator(
    {
      Home:  homeFlow,
      Explore: exploreFlow,
      // Create: CreateScreen,
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