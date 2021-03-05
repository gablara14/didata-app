import React from 'react'
import styled from 'styled-components/native'

export const SignContainer = styled.View`
    background-color: white;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 100px 0px
`

export const ContinueButton = styled.TouchableOpacity`
    background-color: #FF4949;
    width: 80%;
    margin-top: 40px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px
`


export const ContinueButtonText = styled.Text`
    font-size:14px;
    font-weight: 500;
    color: white;
`



export const LabelText = styled.Text`
    font-weight: normal;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 10px
`
export const TextInput = styled.TextInput`
    border: 0.5px solid rgba(0,0,0,0.3);
    height: 42px;
    padding: 10px;
    font-size: 14px;
    border-radius: 5px
`

export const FormView = styled.View`
    width: 80%;
    padding-top: 20px;
    display: flex;
    
`