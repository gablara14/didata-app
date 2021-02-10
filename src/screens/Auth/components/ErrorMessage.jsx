import React from 'react'
import { Text } from 'react-native'


export default ({ message }) => {
    return(
        <Text style={{ color: 'red', fontSize: 12, marginTop: 20 }}>
            {message}
        </Text>
    )
}