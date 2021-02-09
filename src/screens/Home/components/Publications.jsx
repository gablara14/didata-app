import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native';


export const FlexView = styled.View`
  width: 100%;
  display: flex
  flex-direction: row;
`

export default function Publications() {
    return (
        <View>
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
        <FlexView>
          <View style={{ backgroundColor: '#ff9', width: '33%', height: 125, borderStyle: 'solid', borderColor: 'white', borderWidth: 1}} />
          <View style={{ backgroundColor: '#ff9', width: '33%', height: 125, borderStyle: 'solid', borderColor: 'white', borderWidth: 1}} />
          <View style={{ backgroundColor: '#ff9', width: '33%', height: 125, borderStyle: 'solid', borderColor: 'white', borderWidth: 1}} />
        </FlexView>
      </View>      
    )
}
