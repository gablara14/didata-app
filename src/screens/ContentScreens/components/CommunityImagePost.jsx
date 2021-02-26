import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { didataBucket } from '../../../data/config.json'

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
    PostImage,
    UserImage
} from './styles'


const CommunityPost = ({ data, userData }) => {

   if (!userData) return <Text/>

    return (
        <Container>

            <FlexView>
                <UserImage source={{ uri: didataBucket + userData.imageURL}}/>
                <View>
                    <Name style={{marginLeft: 5}}>{userData.name}</Name>
                    <Username style={{marginLeft: 5}}>@{userData.username}</Username>
                </View>

            </FlexView>
            <Text style={{paddingBottom: 10, paddingHorizontal: 10}}>{data.body}</Text>
            


            <View>
                <PostImage source={{ uri: didataBucket + data.imageURL}} />
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

            </View>

            <FlexView>
                {/* <FakeUserImage/>
                <CommentView>
                    <Username>Gabriel Lara</Username>
                    <Comment>
                    Vocês perguntaram e o Gaulers respondeu. Tem um trecho no youtube também, vai la ver!
                    </Comment>
                </CommentView> */}
            </FlexView>
        </Container>
    )
}


export default CommunityPost