import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { Ionicons, FontAwesome5  } from '@expo/vector-icons';

const Container = styled.View`
    padding: 15px
`
const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-left: 18px;
    margin-top: 15px;
    margin-bottom: 15px
`
const Subtitle = styled.Text`
    font-size: 14px;
    margin-left: 5px;
    display: flex
`
const Body = styled.Text`
    color: rgba(0, 0, 0, 0.3);
    font-size: 12px
`

const DetailBlock = styled.View`
    padding: 15px;
`
const FlexView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
` 

const ICONCOLOR = "rgba(0, 0, 0, 0.7)"

const CommunityDetail = () => {
    return (
        <Container>
            <Title>Community Details</Title>

            <DetailBlock style={styles.border} >
                <FlexView>
                    <Ionicons name="earth" size={18} color={ICONCOLOR} />
                    <Subtitle>Public Community</Subtitle>
                </FlexView>
                
                <Body>
                    Anyone can access the content of this community
                </Body>
            </DetailBlock>


            <DetailBlock style={styles.border}>
                <FlexView>
                    <Ionicons name="person-outline" size={18} color={ICONCOLOR} />
                    <Subtitle>
                        Only the owner can post
                    </Subtitle>
                </FlexView>
                <Body>
                    Only the person who created the community or collaborator can post
                </Body>
            </DetailBlock>

            
            <DetailBlock style={styles.border}>
                <FlexView>
                    <FontAwesome5 name="eye" size={18}  color={ICONCOLOR} />
                    <Subtitle>
                        Visible to Everyone
                    </Subtitle>
                </FlexView>
                <Body>
                    The community will be visible to anyone
                </Body>
            </DetailBlock>
        </Container>
    )
}

const styles = StyleSheet.create({
    border: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)'
    }
})

export default CommunityDetail