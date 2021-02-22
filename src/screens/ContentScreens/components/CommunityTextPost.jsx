import React from 'react'
import { View, Text } from 'react-native'
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
    Bold
} from './styles'

export default function CommunityTextPost({data}) {
    return (
        <Container>
            <FlexView>
                <FakeUserImage/>
                <View>
                    <Name style={{marginLeft: 5}}>Gabriel Lara</Name>
                    <Username style={{marginLeft: 5}}>@gabriel.lara</Username>
                </View>
            </FlexView>
            <Text style={{paddingBottom: 10, paddingHorizontal: 10}}>
                {data.body}
            </Text>
            <IconAndInfo style={{ padding: 10}}>
                    <IconContainer >
                        <MaterialIcons name="favorite-outline" size={26} color="rgba(0,0,0,0.5)" />
                        <FontAwesome5 style={{marginLeft: 15}} name="comment" size={24} color="rgba(0,0,0,0.5)" />
                    </IconContainer>

                    <PostInfo>
                        <PostInfoText><Bold>0</Bold> curtidas</PostInfoText>
                        <Entypo name="dot-single" size={24} color="black" />
                        <PostInfoText><Bold>0</Bold> comentários</PostInfoText>
                    </PostInfo>


                </IconAndInfo>
        </Container>
    )
}
