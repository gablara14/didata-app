import React from 'react'
import { ScrollView, Title, FlexView } from '../styles'
import { View } from 'react-native'
import { ResultsDetail, NewReleasesCarousel } from '../../../components/Carousel'
import { communitiesData } from '../../../data/config.json'

const DATA = [
    { name: 'Primeiro Video', image_url: '/lp/section_1.png' },
    { name: 'Segundo Video', image_url: '/lp/section_2.png' },
    { name: 'Terceiro Video', image_url: '/lp/section_1.png' },
]

const NewReleasesComponent = () => {
    return (
        <ScrollView>
            <FlexView >
                <Title> New Releases </Title>
            </FlexView>

            <View>

                <NewReleasesCarousel data={communitiesData} />
                

            </View>
       
        </ScrollView>
    )
}


export default NewReleasesComponent