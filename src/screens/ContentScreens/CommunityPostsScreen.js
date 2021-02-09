import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import CommunityPost from './components/CommunityPost'
import styled from 'styled-components/native'


const FakeImage = styled.View`
    width: 37px;
    height: 37px;
    background-color: #C4C4C4;
    border-radius: 50px
`


const FlexView = styled.View`
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    justify-content: center;
    
`
const UserHeader = styled.View`
    padding: 10px;
   
    
`

const Title = styled.Text`
    color: black;
    font-weight: 500;

`

const SmallText = styled.Text`
    color: rgba(0,0,0,0.7);
    font-weight: 300;
    font-size: 12px;
    padding-top: 2px
`

const CommunityPostsScreen = () => {
    return (
        <SafeAreaView>
            <FlexView>
                <FakeImage />

                <UserHeader>
                    <View>
                        <Title>Quant Investing by Gabriel Lara</Title>
                    </View>
                    <View>
                        <SmallText>05 de janeiro</SmallText>
                    </View>
                </UserHeader>

            </FlexView>

            <ScrollView>
                <CommunityPost />
                <CommunityPost />
                <CommunityPost />
            </ScrollView>

            
        </SafeAreaView>
    )
}


export default CommunityPostsScreen