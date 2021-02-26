import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

import { navigate } from '../../navigationRef'

const ContentTypeButton = styled.TouchableOpacity`
    border-radius: 50px;
    width: 40px;
    height: 40px;
    background-color: white;
    border: 0.5px solid rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
`
const FlexView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px
`


export default function CreatePublication() {
    return (
        <View>
            <FlexView>
                <ContentTypeButton onPress={() => navigate('TextPost')}>
                    <Entypo name="text" size={24} color="black" />
                </ContentTypeButton>
                <ContentTypeButton onPress={() => navigate('ImagePost')}>
                    <Entypo name="image" size={24} color="black" />
                </ContentTypeButton>
            </FlexView>


        </View>
    )
}
