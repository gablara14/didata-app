import React, { useState } from 'react'
import { View, TextInput, Text, SafeAreaView } from 'react-native'
import styled from 'styled-components/native'

const TextArea = styled.TextInput`
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
        </SafeAreaView>
    )
}
