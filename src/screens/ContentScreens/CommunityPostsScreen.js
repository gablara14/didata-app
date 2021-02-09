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
    padding: 15px
`



const CommunityPostsScreen = () => {
    return (
        <SafeAreaView>
            <FlexView>
                <FakeImage />
                <View>
                    <View>
                        <Text>Gabriel Lara</Text>
                    </View>
                    <View>
                        <Text>05 de janeiro</Text>
                    </View>
                </View>
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