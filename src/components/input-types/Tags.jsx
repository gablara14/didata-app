import React from 'react'
import { Text, View, FlatList } from 'react-native'
import styled from 'styled-components/native'


const FlexView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    
`
const TagButton = styled.TouchableOpacity`
    background-color: #FF4646;
    padding: 10px 12px;
    border-radius: 4px

`
const TagButtonText = styled.Text`
    font-size: 12px;
    color: white;
    font-weight: 300
`


const TagInput = ({ data }) => {
    return(
        <FlexView>

            <View>
                <TagButton>
                    <TagButtonText>#{data[0]}</TagButtonText>
                </TagButton>
            </View>
            <View>
                <TagButton>
                    <TagButtonText>#{data[1]}</TagButtonText>
                </TagButton>
            </View>
            <View>
                <TagButton>
                    <TagButtonText>#{data[2]}</TagButtonText>
                </TagButton>
            </View>
            <View>
                <TagButton>
                    <TagButtonText>#{data[3]}</TagButtonText>
                </TagButton>
            </View>
        </FlexView>
    )
}


export default TagInput