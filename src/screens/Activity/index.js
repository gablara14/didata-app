import React from 'react'
import { Text, View, SafeAreaView, ScrollView } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components/native'

import { thriverBucket, communitiesData } from '../../data/config.json'

import CommunityList from './components/CommunityList'

const Container = styled.View`
    height: 100%;
    width: 100%;
    background-color: white
`


const Activity = () => {
    return(
        <Container>
            <SafeAreaView >
                <ScrollView>
                    <CommunityList
                        title="Paid Communities"
                        data={communitiesData}
                    />
                    <CommunityList
                        title="Free Communities"
                        data={communitiesData}
                    />
                </ScrollView>
            </SafeAreaView>
        </Container>
    )
}






export default Activity