import React from 'react'
import {  View, FlatList, TouchableOpacity } from 'react-native'
import { thriverBucket } from '../../../data/config.json'
import styled from  'styled-components/native';

const SmallImage = styled.Image`
    width: 30px;
    height: 30px;
    border-radius: 50px
`
const FlexView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px
`
const Container = styled.View`
    padding: 5px;
`

const Text = styled.Text`
    margin-left: 5px
`

const SearchResultsList = ({ data })  => {
    return (
        <Container>
            <FlatList
                keyExtractor={data => data.id}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => {
                    return(
                        <TouchableOpacity>
                            <FlexView>
                                <SmallImage source={{ uri: thriverBucket + item.image_url }} />
                                <Text>
                                    {item.name}
                                </Text>
                            </FlexView>
                        </TouchableOpacity>
                    )
            
                }}
            />
        </Container>
    )
}


export default SearchResultsList 