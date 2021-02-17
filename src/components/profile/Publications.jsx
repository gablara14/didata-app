import React from 'react'
import { View, Text, TouchableOpacity, Touchable } from 'react-native'
import styled from 'styled-components/native';
import { navigate } from '../../navigationRef'
import CommunityPost from '../../screens/ContentScreens/components/CommunityPost'
export const FlexView = styled.View`
  width: 100%;
  display: flex
  flex-direction: row;
`

export default function Publications() {
    return (
        <View>
        {/* <FlexView>
          
          <TouchableOpacity onPress={() => navigate('CommunityPosts')}  style={{ backgroundColor: '#ff9', width: '33%', height: 125, borderStyle: 'solid', borderColor: 'white', borderWidth: 1}} />
          
         
          <View style={{ backgroundColor: '#ff9', width: '33%', height: 125, borderStyle: 'solid', borderColor: 'white', borderWidth: 1}} />
          <View style={{ backgroundColor: '#ff9', width: '33%', height: 125, borderStyle: 'solid', borderColor: 'white', borderWidth: 1}} />
        </FlexView>
        <FlexView>
          <View style={{ backgroundColor: '#ff9', width: '33%', height: 125, borderStyle: 'solid', borderColor: 'white', borderWidth: 1}} />
          <View style={{ backgroundColor: '#ff9', width: '33%', height: 125, borderStyle: 'solid', borderColor: 'white', borderWidth: 1}} />
          <View style={{ backgroundColor: '#ff9', width: '33%', height: 125, borderStyle: 'solid', borderColor: 'white', borderWidth: 1}} />
        </FlexView>
        <FlexView>
          <View style={{ backgroundColor: '#ff9', width: '33%', height: 125, borderStyle: 'solid', borderColor: 'white', borderWidth: 1}} />
          <View style={{ backgroundColor: '#ff9', width: '33%', height: 125, borderStyle: 'solid', borderColor: 'white', borderWidth: 1}} />
          <View style={{ backgroundColor: '#ff9', width: '33%', height: 125, borderStyle: 'solid', borderColor: 'white', borderWidth: 1}} />
        </FlexView> */}
        <View style={{alignItems: 'center', justifyContent: 'center', padding: 20, borderBottomColor: 'rgba(0,0,0,0.3)', borderBottomWidth: 0.5}}>
          <Text style={{ fontSize: 16, fontWeight: 'bold'}}>63 PUBLICATIONS</Text>
        </View>
        <View>
          < CommunityPost />
          < CommunityPost />
          < CommunityPost />
          < CommunityPost />
          < CommunityPost />
        </View>
      </View>      
    )
}
