import React from 'react'
import {  Title, FlexView, ScrollView, Subtitle, NotFollowingText } from '../styles'
import { View } from 'react-native'
import { TrendingAuthors} from '../../../components/Carousel'
import { SeeAll } from '../../../components/Buttons'

const AUTHORDATA = [
    { name: 'Jim Simons', image_url: '/didata_app/JIMSIMONS.jpg', id: '1' },
    { name: 'George Soros', image_url: '/didata_app/george_soros.jfif', id: '2' },
    { name: 'Nassim Taleb', image_url: '/didata_app/nassim_taleb.jfif', id: '3' },
    { name: 'Jim Simons', image_url: '/didata_app/JIMSIMONS.jpg', id: '4' },
]
    

const TrendingAuthorsComponent = () => {
    return (
            <View>
                <TrendingAuthors data={AUTHORDATA} /> 
            </View>
    )
}


export default TrendingAuthorsComponent