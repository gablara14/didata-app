import React from 'react'
import { Text, Touchable, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components/native'


const CreateAccButton = styled.TouchableOpacity`
    background-color: #FF4949;
    width: 336px;
    height: 62px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px
`

const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: white
`
const ButtonText = styled.Text`
    font-size:14px;
    font-weight: 500
`


const RegisterOrLoginScreen = ({ navigation }) => {
    return (
        <Container>

            <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={{marginBottom:30}}>
                <ButtonText
                    style={{
                        
                        color: '#FF4949'
                    }}
                >
                    Have an account already? Log in here
                </ButtonText>
            </TouchableOpacity>

            


            <CreateAccButton  onPress={() => navigation.navigate('SignUp')}>
                <ButtonText style={{color: 'white'}}>
                    Create an Account
                </ButtonText>
            </CreateAccButton>
        </Container>
    )
}


export default RegisterOrLoginScreen