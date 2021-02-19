import React from 'react'
import { View, Text } from 'react-native'


export default function EmptyList({text}) {
    return (
        <View style={{padding:50, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{ fontSize: 14, fontWeight: 'bold'}}>
                {
                    text ? text 
                    : 'The user does not has any community'
                }
            </Text>
        </View>
    )
}
