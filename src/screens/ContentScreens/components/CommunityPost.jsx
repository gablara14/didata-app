import React from 'react'
import { View, Text } from 'react-native'

import styled from 'styled-components/native'
import { MaterialIcons, FontAwesome5, Fontisto } from '@expo/vector-icons';

const FakeImage = styled.View`
    width: 100%;
    height: 220px;
    background-color:  #C4C4C4
`
const FakeUserImage = styled.View`
    width: 37px;
    height: 37px;
    background-color: #C4C4C4;
    border-radius: 50px
`
const FlexView = styled.View`
    display: flex;
    flex-direction: row;
    padding: 15px;
    align-items: center
`

const Username = styled.Text`
    font-size: 14px;
    font-weight: bold
`
const Comment = styled.Text`
    font-size: 12px;
    font-weight: 300
`

const CommentView = styled.View`
    background-color: #E4E4E4;
    padding: 10px
    border-radius: 5px;
    width: 80%;
    margin-left: 10px
`
const Container = styled.View`
    margin-bottom: 70px
`
const IconContainer = styled.View`
    border: 0.5px solid rgba(0,0,0,0.2);
    padding: 10px 15px;
    display: flex;
    flex-direction: row;

`


const CommunityPost = () => {
    return (
        <Container>

            <FlexView>
                <FakeUserImage/>
                <Username style={{marginLeft: 5}}>Gabriel Lara</Username>
            </FlexView>
            


            <View>
                <FakeImage />
                <IconContainer >
                    <MaterialIcons name="favorite-outline" size={26} color="black" />
                    <FontAwesome5 style={{marginLeft: 15}} name="comment" size={24} color="black" />
                    
                </IconContainer>
            </View>

            <FlexView>
                <FakeUserImage/>
                <CommentView>
                    <Username>Gabriel Lara</Username>
                    <Comment>
                    Vocês perguntaram e o Gaulers respondeu. Tem um trecho no youtube também, vai la ver!
                    </Comment>
                </CommentView>
            </FlexView>
        </Container>
    )
}


export default CommunityPost