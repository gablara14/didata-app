import React from 'react'

import { View, Text, Image, StyleSheet, Dimensions, SafeAreaView } from 'react-native'

import { thriverBucket } from '../../../data/config.json'

import { BackgroundImage } from '../styles'

import styled from 'styled-components/native';

const deviceWidth = Dimensions.get('window').width
const HEIGHT = deviceWidth / 1.5

const DarkLayer = styled.View`
  width: ${deviceWidth}px;
  height: ${HEIGHT}px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  position: absolute;
`;



const CategoryScreen = ({ navigation }) => {


    const id = navigation.getParam('id')
    const name = navigation.getParam('name')
    const imageURL = navigation.getParam('imageURL')



    return(
        <SafeAreaView>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: thriverBucket +  imageURL}} />
                <DarkLayer />
                <Text style={styles.categoryTitle}> {name} </Text>
            </View>

           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image:{
        width: deviceWidth,
        height: HEIGHT,
        position: 'absolute',
        borderRadius: 4
    },
    imageContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: deviceWidth,
        height: HEIGHT,
        borderRadius: 4
    },
    categoryTitle:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        zIndex: 1

    }
})



export default CategoryScreen