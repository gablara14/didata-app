import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import convertDateToText from '../../../utils/convertDateToText'
import { MaterialIcons, FontAwesome5, Fontisto, Entypo } from '@expo/vector-icons';
import {
    FakeImage,
    FakeUserImage,
    FlexView,
    Name,
    Username,
    Comment,
    CommentView,
    Container,
    IconContainer,
    IconAndInfo,
    PostInfo,
    PostInfoText,
    Bold,
    UserImage
} from './styles'

import { didataBucket } from '../../../data/config.json'
import { navigate } from '../../../navigationRef'


export default function CommunityTextPost({ data, userData }) {
    return (
        <Container>
            <FlexView>
                <UserImage source={{ uri: didataBucket + userData.imageURL}}/>
                <View>
                    <Name style={{marginLeft: 5}}>{userData.name}</Name>
                    <Username style={{marginLeft: 5}}>@{userData.username}</Username>
                </View>
            </FlexView>
            <Text style={{paddingBottom: 10, paddingHorizontal: 10}}>
                {data.body}
            </Text>
            <IconAndInfo style={{ padding: 10}}>
                    <IconContainer >
                        <MaterialIcons name="favorite-outline" size={26} color="rgba(0,0,0,0.5)" />
                        <TouchableOpacity onPress={() => navigate('Comment', {userData, data})}>
                            <FontAwesome5 style={{marginLeft: 15}} name="comment" size={24} color="rgba(0,0,0,0.5)" />
                        </TouchableOpacity>
                    </IconContainer>

                    <PostInfo>
                        <PostInfoText><Bold>0</Bold> curtidas</PostInfoText>
                        <Entypo name="dot-single" size={24} color="black" />
                        <TouchableOpacity onPress={() => navigate('Comment', {userData, data})}>
                            <PostInfoText><Bold>0</Bold> comentários</PostInfoText>
                        </TouchableOpacity>
                    </PostInfo>


                </IconAndInfo>
        </Container>
    )
}
