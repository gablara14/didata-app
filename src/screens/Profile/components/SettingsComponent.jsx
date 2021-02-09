import React from 'react'


import { Text, View, FlatList, TouchableOpacity, Touchable } from 'react-native'
import { AntDesign, Feather  } from '@expo/vector-icons'; 

import { navigate } from '../../../navigationRef'


import styled from 'styled-components/native';

const FlexView = styled.View`
    display: flex;
    flex-direction: row;


`

const ItemContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px

`

const ItemText = styled.Text`
    margin-left: 7px
`

const Title = styled.Text`
    font-weight: bold;
    color: #8C8C8C
`
const TitleContainer = styled.View`
    padding: 10px
`

const Container = styled.View`
    margin-top: 20px
`



const SettingsComponent = ({ title, data }) => {
    return(
        <Container>
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
            
            <FlatList
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={data => data.id}
                data={data}
                renderItem={({ item }) => {
                    return(
                        <TouchableOpacity
                            // onPress={() => navigate(item.navigateTo)}
                        >
                            <ItemContainer>

                               
                                <FlexView>
                                    <Feather name="help-circle" size={18} color="#8C8C8C" />
                                    <ItemText>{ item.text }</ItemText> 
                                </FlexView>
                                
                                <AntDesign name="right" size={16} color="#8C8C8C" />

                            </ItemContainer>
                        </TouchableOpacity>
                    )
                }}
            />

        </Container>

    )
}


export default SettingsComponent