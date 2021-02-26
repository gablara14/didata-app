import React, { useState } from 'react'
import { View, TextInput, Text, SafeAreaView } from 'react-native'
import styled from 'styled-components/native'
import { navigate } from '../../navigationRef'
import { TextArea } from './styles'



const PROVISORY_CONTINUE_BUTTON = styled.TouchableOpacity`
    padding: 10px;
    font-size: 18px;
`

export default function TextPost() {
    
    const [ text, setText ] = useState('')
    return (
        <SafeAreaView>
            <TextArea
                placeholder="Type something..."
                multiline={true}
                numberOfLines={50}
                onChangeText={e => setText(e)}
                value={text}
                autoFocus
            />

            <PROVISORY_CONTINUE_BUTTON
                onPress={() => navigate('ConfirmPost', { type: 'text', text: text })}
            >
                <Text >Continue</Text>
               
            </PROVISORY_CONTINUE_BUTTON>
        </SafeAreaView>
    )
}
