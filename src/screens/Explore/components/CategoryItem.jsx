import React from 'react'
import { FlatList, View,   StyleSheet, Dimensions, TouchableOpacity, Touchable } from 'react-native'
import { thriverBucket } from '../../../data/config.json'
const deviceWidth = Dimensions.get('window').width
const IMAGE_SIZE = deviceWidth / 2.2
import styled from 'styled-components/native';
import { navigate } from '../../../navigationRef'
import { DarkLayer } from '../styles'

const ImageContainer = styled.View`
    width: ${IMAGE_SIZE}px;
    height: ${IMAGE_SIZE}px;
    margin: 2px;
    align-items: center;
    justify-content: center;
`;

const Text = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 14px;
    z-index: 1
`;

const Image = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 4px
`;


const CategoryItem = ({ data }) => {
    return(
        <TouchableOpacity onPress={
            () => navigate('Category', { id: data.id, name: data.name, imageURL: data.image_url })}
            >
            <ImageContainer>
                 <Image source={{ uri:  thriverBucket + data.image_url }} />

                <DarkLayer />
                <Text>{data.name} </Text>
            </ImageContainer>
        </TouchableOpacity>
    )
}



export default CategoryItem