import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import {
    UserImage,
    FlexView,
    Name,
    Username
} from './components/styles'
import { didataBucket } from '../../data/config.json'

export default class CommentScreen extends Component {
    render() {
        const {  imageURL, name, username } = this.props.navigation.getParam('userData')
        const { body } = this.props.navigation.getParam('data')
        return (
            <SafeAreaView>
                <FlexView>
                    <UserImage source={{ uri: didataBucket + imageURL}}/>
                    <View>
                        <Name style={{marginLeft: 5}}>{name}</Name>
                        <Username style={{marginLeft: 5}}>@{username}</Username>
                    </View>
                </FlexView>
                <Text style={{paddingBottom: 10, paddingHorizontal: 10}}>{body}</Text>
                
            </SafeAreaView>
        )
    }
}
