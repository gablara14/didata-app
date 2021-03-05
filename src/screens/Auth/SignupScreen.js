import React, {Component} from 'react'
import { ActivityIndicator } from 'react-native'
import {SignContainer, ContinueButton, ContinueButtonText, LabelText, TextInput, FormView } from './styles'
import * as actions from '../../actions'
import {connect} from 'react-redux'
import ErrorMessage from './components/ErrorMessage'
import { NavigationEvents } from 'react-navigation'

class SignUpScreen extends Component {

    state = { email: '', password: '' , username: '', name: '', loader: false}

    onSubmit(){
        const { email, password, username, name } = this.state
        this.setState({ loader: true })
        this.props.signUp({ email, password, username, name }).then(() => {
            this.setState({ loader: false })
        })
        
    }

    render(){
        return (
            <SignContainer>
                <NavigationEvents onWillFocus={() => this.props.clearErrorMessage()} />

                <FormView>
                    <LabelText>Your name</LabelText>
                    <TextInput
                     placeholder="Enter your name"
                        value={this.state.name} 
                        onChangeText={e => this.setState({ name: e })} 
                        autoCorrect={false}
                    />
                </FormView>

                <FormView>
                    <LabelText>Your Username</LabelText>
                    <TextInput
                     placeholder="Enter your username"
                        value={this.state.username} 
                        onChangeText={e => this.setState({ username: e })} 
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </FormView>
    
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
                        secureTextEntry
                        placeholder="Enter your password"
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
                    message={this.props.auth.errorMessage}
                />
            </SignContainer>
        )
    }

}
function MapStateToProps(state){
    return{
        auth: state.auth
    }
}
export default connect(MapStateToProps, actions )(SignUpScreen)