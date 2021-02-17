import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { ActivityIndicator } from 'react-native'
import * as Font from 'expo-font'
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
import GlobalFont from 'react-native-global-font'


const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

const homeFlow = createStackNavigator(homeOptions.screens, homeOptions.options)
const exploreFlow = createStackNavigator(exploreOptions.screens, exploreOptions.options)
const activityFlow = createStackNavigator(activityOptions.screens, activityOptions.options)
const profileFlow = createStackNavigator(profileOptions.screens, profileOptions.options )


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
      // Explore: exploreFlow,
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




export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

 
  // componentDidMount() {
  //     let fontName = 'Circular_Medium'
  //     GlobalFont.applyGlobal(fontName)
  // }

  async componentWillMount() {
    await Font.loadAsync({
      Circular_Black: require("./assets/fonts/CircularStd-Black.otf"),
      Circular_Bold: require("./assets/fonts/CircularStd-Bold.otf"),
      Circular_Book: require("./assets/fonts/CircularStd-Book.otf"),
      Circular_Medium: require("./assets/fonts/CircularStd-Medium.otf"),
    });
    let fontName = 'Circular_Book'
    GlobalFont.applyGlobal(fontName)
    this.setState({ loading: false });
  }

  render(){
    if (this.state.loading){
      return(
        <>
          <ActivityIndicator size="large" color="blue"/> 
        </>
      )
    }
      return(
    <Provider store={store}>
      <App ref={(navigator) => { setNavigator(navigator) }} />
    </Provider>
  )
  }

}