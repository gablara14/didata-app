import React from 'react'
import { View, TouchableOpacity, Touchable } from 'react-native'
import styled from 'styled-components/native';
import { navigate } from '../../navigationRef'

export const FlexView = styled.View`
  width: 100%;
  display: flex
  flex-direction: row;
`

export default function Publications() {
    return (
        <View>
        <FlexView>
          
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
        </FlexView>
      </View>      
    )
}
