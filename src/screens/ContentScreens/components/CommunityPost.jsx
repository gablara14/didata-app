import React from 'react'
import { View, Text } from 'react-native'

import styled from 'styled-components/native'


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

const CommunityPost = () => {
    return (
        <Container>
            <Text>Vocês perguntaram e o Gaulers respondeu. Tem um trecho no youtube também, vai la ver!</Text>
            <FakeImage />
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