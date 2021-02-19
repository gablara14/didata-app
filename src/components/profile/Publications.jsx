import React from 'react'
import { View, Text, TouchableOpacity, Touchable, FlatList } from 'react-native'
import styled from 'styled-components/native';
import { navigate } from '../../navigationRef'
import CommunityPost from '../../screens/ContentScreens/components/CommunityPost'
import CreatePublication from './CreatePublication'

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
          <CreatePublication />
          < CommunityPost />
          < CommunityPost />
          < CommunityPost />
          < CommunityPost />
          < CommunityPost />
{/* 
          <FlatList
            data={}
            keyExtractor={data => data.id}
            renderItem={({ item }) => {
              if (item.type === 'image'){
                return  < CommunityPost />
              } else {
                return // TextPost
              }
            }}
          /> */}

        </View>
      </View>      
    )
}
