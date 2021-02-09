import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styled from 'styled-components/native';
import { thriverBucket, communitiesData } from '../../../data/config.json'
import { navigate } from '../../../navigationRef'

export const FlexButton = styled.TouchableOpacity`
  width: 100%;
  display: flex
  flex-direction: row;
  padding: 20px;
  align-items: center;
`

export const JoinButtonView = styled.View`
  border-radius: 50px;
  background-color: black;
  height: 50px;
  width: 50px;
`

export default function Communities() {

    const item = communitiesData[0]
    
    return (
        <>           
            <View  style={{display:'flex', flexDirection:'row',  borderBottomWidth: 1,  borderBottomStyle: 'solid', borderBottomColor: 'rgba(0, 0, 0, 0.1)'}}>
                <FlexButton 
                    onPress={() => navigate('Community', { id: item.id, name: item.name, image_url: item.image_url})}
                >
                    <Image source={{uri: thriverBucket + communitiesData[0].image_url  }} style={{backgroundColor:"#C4C4C4", height: 75, width: 75, borderRadius: 4}} />
                    <View style={{marginLeft: 15}}>
                        <Text  style={{ fontSize: 16,  marginBottom: 5}}>
                            {communitiesData[0].name}
                        </Text>
                        <Text style={{ fontSize: 11}}>
                            Public community - 313112 members
                        </Text>
                    </View>

                    <View>

                    </View>
                </FlexButton>
            </View>    
            
            <View  style={{display:'flex', flexDirection:'row',  borderBottomWidth: 1,  borderBottomStyle: 'solid', borderBottomColor: 'rgba(0, 0, 0, 0.1)'}}>
                <FlexButton>
                    <Image source={{uri: thriverBucket + communitiesData[2].image_url  }}  style={{backgroundColor:"#C4C4C4", height: 75, width: 75, borderRadius: 4}} />
                    <View style={{marginLeft: 15}}>
                        <Text  style={{ fontSize: 16,  marginBottom: 5}}>
                            {communitiesData[2].name}
                        </Text>
                        <Text style={{ fontSize: 11}}>
                            Public community - 11048 members
                        </Text>
                    </View>

                    <View>

                    </View>
                </FlexButton>
                

            </View>    
        </>
    )
}
