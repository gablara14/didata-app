import React from 'react'
import { View,  FlatList, TouchableOpacity  } from 'react-native'
import styled from 'styled-components/native';
import { thriverBucket } from '../data/config.json'

const FlexView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
`
const Image = styled.Image`
    width: 45px;
    height: 45px;
    border-radius: 50px
`

const Title = styled.Text`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 1px
`
const SubTitle = styled.Text`
    font-size: 12px;
    color: #8f8f91;
    font-weight: 300
`

const Container = styled.View`
    padding: 5px;
`

const TextContainer = styled.View`
    margin-left: 15px
`


const AuthorListItem = ({ data }) => {
    return (
        <Container>
            <FlatList 
                
                keyExtractor={data => data.id}
                data={data}
                renderItem={({ item }) => {
                    return(
                        <TouchableOpacity>
                            <FlexView style={{ borderBottomWidth: 1,  borderBottomStyle: 'solid', borderBottomColor: 'rgba(0, 0, 0, 0.1)'}}>
                                <Image source={{ uri: thriverBucket + item.image_url }} />
                                    <TextContainer>
                                        <Title>
                                            {item.name}
                                        </Title>
                                        <SubTitle>
                                            @{item.username}
                                        </SubTitle>
                                    </TextContainer>

                            </FlexView>

                        </TouchableOpacity>
                    )
                }}
            />
        </Container>
    )
}



export default AuthorListItem