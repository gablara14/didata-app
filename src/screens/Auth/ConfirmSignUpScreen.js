import React, {Component} from 'react'
import { ActivityIndicator } from 'react-native'
import {SignContainer, ContinueButton, ContinueButtonText, LabelText, TextInput, FormView } from './styles'
import * as actions from '../../actions'
import {connect} from 'react-redux'
import ErrorMessage from './components/ErrorMessage'
import { NavigationEvents } from 'react-navigation'
import { navigate } from '../../navigationRef'

class ConfirmSignUp extends Component {

    state = { }

    onSubmit(){
        // const { email, password, username, name } = this.state
        // this.setState({ loader: true })
        // this.props.signUp({ email, password, username, name }).then(() => {
        //     this.setState({ loader: false })
        // })
    }


    render(){
        return (
            <SignContainer>
                <NavigationEvents onWillFocus={() => this.props.clearErrorMessage()} />

                <LabelText>Change Image</LabelText>

                <FormView>
                    <LabelText>Your Interests</LabelText>
                </FormView>

                
                <ContinueButton onPress={() => this.onSubmit()}>
                    {
                        this.state.loader 
                        ? <ActivityIndicator size="small" color="white"/>
                        : <ContinueButtonText>Continue</ContinueButtonText>
                    }
                </ContinueButton>

                <ContinueButton onPress={() => navigate('Home')}>
                    {
                        this.state.loader 
                        ? <ActivityIndicator size="small" color="white"/>
                        : <ContinueButtonText>Skip</ContinueButtonText>
                    }
                </ContinueButton>

            </SignContainer>
        )
    }

}
function MapStateToProps(state){
    return{
        auth: state.auth
    }
}
export default connect(MapStateToProps, actions )(ConfirmSignUp)