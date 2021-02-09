import React from 'react'
import { Text, View, SafeAreaView, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import Form from '../../components/Form'
import { ConfirmCreateNewCommunity } from '../../components/Buttons'

const DATA = [
    { id: "1", label: 'Name of Community', type: 'text'},
    { id: "2", label: 'Community description', type: 'text'},
    { id: "3", label: 'Tags', type: 'tag'}
]
const SETTINGSDATA = [
    { id: "1", label: 'Name of Community', type: 'text'},

]

const ImageFakeContainer = styled.View`
    width: 100%;
    height: 350px
    background-color: #C4C4C4
`


const CreateCommunityScreen =  () => {
    return(
        <SafeAreaView>
            <ScrollView>
                
                <ImageFakeContainer />
                <Form title="Community Info" data={DATA}/>
                <Form title="Settings" data={SETTINGSDATA}/>
                <ConfirmCreateNewCommunity />

            </ScrollView>
        </SafeAreaView>
    )
}

export default CreateCommunityScreen