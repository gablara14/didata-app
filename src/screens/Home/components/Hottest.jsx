import React from 'react'
import { View } from 'react-native'
import { Hottest, HottestCommunities } from '../../../components/Carousel'
import { SeeAll } from '../../../components/Buttons'
import {  Title, FlexView, ScrollView } from '../styles'

const DATA = [
    { name: 'Building a Quant Machine', image_url: '/didata_app/quant.jfif' },
    { name: 'How I made my first million', image_url: '/didata_app/dolar.jfif' },
    { name: 'Is Tesla a bubble?', image_url: '/didata_app/tesla.jpg' },
]


const HottestComponent = () => {
    return (
        <ScrollView>
            <FlexView>
                <Title> Hottest Communities </Title>
                {/* <SeeAll/> */}
            </FlexView>
            <View>
                {/* <Hottest data={DATA} /> */}
                <HottestCommunities data={DATA} />
            </View>
        </ScrollView>
    )
}


export default HottestComponent