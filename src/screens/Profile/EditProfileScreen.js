import React, { useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import styled from 'styled-components/native'
import { Flex } from '../Explore/styles'
import { Container } from './styles'
import { useSelector } from 'react-redux'
import { UpdateUserButton } from '../../components/Buttons'

const FakeImage = styled.View`
    width: 82px;
    height: 82px;
    background: #C4C4C4;
    border-radius: 50px
` 
const Label = styled.Text`
    font-size: 12px;
    color: rgba(0,0,0,0.6)
`
const Input = styled.TextInput`
    font-size: 16px;
    padding: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
`

const Name = styled.Text`
    font-size: 14px;
    font-weight: bold
`

const Username = styled.Text`
    font-size: 12px;
    font-weight: 500;
    color: rgba(0,0,0,0.5)
`

export default function EditProfileScreen() {

    const { name, imageURL, username, bio, userId } = useSelector(state => state.profile)

    const [ nameValue, setNameValue ] = useState(name)
    const [ usernameValue, setUsernameValue ] = useState(username)
    const [ bioValue, setBioValue ] = useState(bio)


    const renderInput = (label, initialValue, onChangeText) => {
        return(
            <>
                <Label >{label}</Label>
                <Input
                    value={initialValue}
                    onChangeText={onChangeText}
                    style={{ borderBottomWidth: 0.5,  borderBottomStyle: 'solid', borderBottomColor: 'rgba(0,0,0,0.6)' }}
                />
            </>
        )
    }


    return (
        <Container style={{alignItems: 'center'}}>
            <View style={{ padding: 40}}>
                <FakeImage />
                <View style={{ paddingVertical: 15 }}>
                    <Name>{name}</Name>
                    <Username>@{username}</Username>
                </View>

            </View>
            

            <View style={{width: '90%'}}>
                {renderInput('Name', nameValue, setNameValue)}
                {renderInput('Username', usernameValue, setUsernameValue)}
                <Label >Bio</Label>
                <Input multiline = {true} numberOfLines = {4} value={bioValue} onChangeText={setBioValue}
                    style={{ borderBottomWidth: 0.5,  borderBottomStyle: 'solid', borderBottomColor: 'rgba(0,0,0,0.6)' }}
                />
            </View>

            <UpdateUserButton />
        </Container>
    )
}
