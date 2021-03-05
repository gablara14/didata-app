import React, {Component} from 'react'
import {SignContainer, ContinueButton, ContinueButtonText, LabelText, TextInput, FormView } from './styles'
import * as actions from '../../actions'
import {connect} from 'react-redux'
import ErrorMessage from './components/ErrorMessage'
import { ActivityIndicator } from 'react-native'
import { NavigationEvents } from 'react-navigation'

class SignInScreen extends Component {

    state = { email: '', password: '' , loader: false}

    onSubmit(){
        this.setState({ loader: true })
        this.props.signIn({ email: this.state.email, password: this.state.password}).then(() => {
            this.setState({ loader: false })
        })
        
    }


    render(){
        return (
            <SignContainer>
                <NavigationEvents onWillFocus={() => this.props.clearErrorMessage()} />
    
               <FormView>
                    <LabelText>Your email</LabelText>
                    <TextInput
                        placeholder="Enter your email"
                        value={this.state.email} 
                        onChangeText={e => this.setState({ email: e })} 
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </FormView>

                <FormView>
                    <LabelText>Your Password</LabelText>
                    <TextInput
                         placeholder="Enter your password"
                        secureTextEntry
                        value={this.state.password} 
                        onChangeText={e => this.setState({ password: e })} 
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </FormView>

                <ContinueButton onPress={() => this.onSubmit()}>
 
                    {
                        this.state.loader
                        ? <ActivityIndicator size="small" color="white"/>
                        : <ContinueButtonText>Continue</ContinueButtonText>
                    }
                </ContinueButton>
                <ErrorMessage
                    message={this.props.errorMessage}
                />
            </SignContainer>
        )
    }

}

function MapStateToProps(state){
    return{
        errorMessage: state.auth.errorMessage
    }
}

export default connect(MapStateToProps, actions )(SignInScreen)