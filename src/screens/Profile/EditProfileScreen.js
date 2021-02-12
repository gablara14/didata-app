import React, { useState, Component } from 'react'
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import { Flex } from '../Explore/styles'
import { Container } from './styles'
import { connect } from 'react-redux'
import { UpdateUserButton } from '../../components/Buttons'
import * as actions from '../../actions'

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


const CreateButton = styled.TouchableOpacity`
    background-color: red;
    width: 80%;
    padding: 15px;
    borderRadius: 4px;
    display: flex;
    alignItems: center;
    justifyContent: center;
    margin: 25px
`
const ButtonText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #fff
`




class EditProfileScreen extends Component {



    state = {
        nameValue: this.props.profile.name,
        usernameValue:  this.props.profile.username,
        bioValue: this.props.profile.bio,
        loader: false
    }


    onSubmit = () => {
        this.setState({ loader: true })
        this.props.updateUser(this.props.profile._id, {
            name: this.state.nameValue ,
            username: this.state.usernameValue,
            bio: this.state.bioValue
        }).then(() => this.setState({ loader: false }))
    }

    

    renderInput(label, initialValue, onChangeText){
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

    render(){
        const { name, imageURL, username, bio, userId } = this.props.profile
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
                    {this.renderInput('Name', this.state.nameValue,  (e) => this.setState({ nameValue: e }) )}
                    {this.renderInput('Username', this.state.usernameValue, (e) => this.setState({ usernameValue: e }) )}
                    {this.renderInput('Bio', this.state.bioValue, (e) => this.setState({ bioValue: e }) )}
                </View>


                
                <CreateButton onPress={this.onSubmit}>
                    {
                        this.state.loader
                        ? <ActivityIndicator size="small" color="white"/> 
                        : <ButtonText>Save!</ButtonText>
                    }
                </CreateButton> 


            </Container>
        )
    }

}

function MapStateToProps (state) {
    return{
        profile: state.profile
    }
}

export default connect(MapStateToProps, actions)(EditProfileScreen)