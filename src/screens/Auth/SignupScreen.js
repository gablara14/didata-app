import React, {Component} from 'react'
import { ActivityIndicator } from 'react-native'
import {SignContainer, ContinueButton, ContinueButtonText, LabelText, TextInput, FormView } from './styles'
import * as actions from '../../actions'
import {connect} from 'react-redux'
import ErrorMessage from './components/ErrorMessage'


class SignUpScreen extends Component {

    state = { email: '', password: '' , loader: false}

    onSubmit(){
        this.setState({ loader: true })
        this.props.signUp({ email: this.state.email, password: this.state.password}).then(() => {
            this.setState({ loader: false })
        })
        
    }

    render(){
        return (
            <SignContainer>
    
               <FormView>
                    <LabelText>Your email</LabelText>
                    <TextInput
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
export default connect(MapStateToProps, actions )(SignUpScreen)