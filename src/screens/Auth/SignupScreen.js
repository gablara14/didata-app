import React, {Component} from 'react'
import {SignContainer, ContinueButton, ContinueButtonText, LabelText, TextInput, FormView } from './styles'
import * as actions from '../../actions'
import {connect} from 'react-redux'

class SignUpScreen extends Component {

    state = { email: '', password: '' }


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


                
                <ContinueButton onPress={() => this.props.signUp({ email: this.state.email, password: this.state.password})}>
                    <ContinueButtonText>
                        Continue
                    </ContinueButtonText>
                </ContinueButton>
            </SignContainer>
        )
    }

}

export default connect(null, actions )(SignUpScreen)