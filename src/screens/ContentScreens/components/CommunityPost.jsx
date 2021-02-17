import React from 'react'
import { View, Text, Dimensions } from 'react-native'

import styled from 'styled-components/native'
import { MaterialIcons, FontAwesome5, Fontisto, Entypo } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

const FakeImage = styled.View`
    width: ${windowWidth};
    height: ${windowWidth};
    background-color:  #C4C4C4
`
const FakeUserImage = styled.View`
    width: 45px;
    height: 45px;
    background-color: #C4C4C4;
    border-radius: 50px
`
const FlexView = styled.View`
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center
`

const Name = styled.Text`
    font-size: 16px;
    font-weight: bold
`
const Username = styled.Text`
    font-size: 14px;
    font-weight: 500;
    color: rgba(0,0,0,0.5)
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

    display: flex;
    flex-direction: row;
`


const IconAndInfo = styled.View`
    border: 0.5px solid rgba(0,0,0,0.2);
`

const PostInfo = styled.View`
    display: flex;
    flexDirection: row;
    alignItems: center
`
const PostInfoText = styled.Text`
    font-weight: 500
`
const Bold = styled.Text`
    font-weight: bold
`

const CommunityPost = () => {
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
            


            <View>
                <FakeImage />
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