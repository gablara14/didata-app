import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
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
    Bold
} from './styles'

export default function CommunityTextPost() {
    return (
        <Container>
            <FlexView>
                <FakeUserImage/>
                <View>
                    <Name style={{marginLeft: 5}}>Gabriel Lara</Name>
                    <Username style={{marginLeft: 5}}>@gabriel.lara</Username>
                </View>
            </FlexView>
            <Text style={{paddingBottom: 10, paddingHorizontal: 10}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio cupiditate quos quaerat earum commodi architecto iste mollitia nisi, qui eveniet impedit facere animi, explicabo quidem eligendi quo enim, magni tempore.</Text>
            <IconAndInfo style={{ padding: 10}}>
                    <IconContainer >
                        <MaterialIcons name="favorite-outline" size={26} color="rgba(0,0,0,0.5)" />
                        <FontAwesome5 style={{marginLeft: 15}} name="comment" size={24} color="rgba(0,0,0,0.5)" />
                    </IconContainer>

                    <PostInfo>
                        <PostInfoText><Bold>20</Bold> curtidas</PostInfoText>
                        <Entypo name="dot-single" size={24} color="black" />
                        <PostInfoText><Bold>14</Bold> comentários</PostInfoText>
                    </PostInfo>


                </IconAndInfo>
        </Container>
    )
}
