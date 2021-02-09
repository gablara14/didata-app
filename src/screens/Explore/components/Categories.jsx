import React from 'react'
import { FlatList, View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Touchable } from 'react-native'
import { thriverBucket } from '../../../data/config.json'
import { DarkLayer, BackgroundImage, Flex } from '../styles'

import { navigate } from '../../../navigationRef'

const deviceWidth = Dimensions.get('window').width
const IMAGE_SIZE = deviceWidth / 2.2

import CategoryItem from './CategoryItem'








const Categories = ({ data }) => {

   

    return (
        <View style={styles.container}>

            <Flex>
                <CategoryItem data={data[0]} />
                <CategoryItem data={data[1]} />
            </Flex>
            <Flex>
                <CategoryItem data={data[2]} />
                <CategoryItem data={data[3]} />
            </Flex>
            <Flex>
                <CategoryItem data={data[0]} />
                <CategoryItem data={data[1]} />
            </Flex>
            <Flex>
                <CategoryItem data={data[2]} />
                <CategoryItem data={data[3]} />
            </Flex>

        </View>

    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 4
        
      
    },
    container: {
        width: '100%',
        marginTop: 10
    },
    imageContainer:{
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        margin: 2,
        alignItems: 'center',
        justifyContent: 'center',
       
        
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        zIndex: 1
    }

})

export default Categories