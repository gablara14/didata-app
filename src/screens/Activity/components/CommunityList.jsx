import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { thriverBucket  } from '../../../data/config.json'
import { navigate } from '../../../navigationRef'
// const List = styled.FlatList`

// `


const Container = styled.View`
    margin-top: 30px
`

const Title = styled.Text`
    font-size: 22px;
    font-weight: bold
`
const CommunityCard = styled.View`
    width: 300px;
    height: 300px;
    border-radius: 10px;
    
    margin-left: 10px
`
const Image = styled.Image`
    width: 100%;
    height: 232px;
`
const CommunityTitle = styled.Text`
    font-size: 16px;
    font-weight: 400
` 
const FlexView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px 10px
` 
const AccessButton = styled.TouchableOpacity`
    width: 70px;
    height: 33px;
    background: #D93511;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ButtonText = styled.Text`
    font-size: 12px;
    color: white
`

const Description = styled.Text`
    font-size: 12px;
    font-weight: 300;
    color: #8f8f91
`

const CommunityList = ({ title, data }) => {
    return (
        <Container>
            <View style={{ marginBottom: 10, marginLeft: 10}}>
                <Title>{title}</Title> 
            </View>
            <View  >
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={data => data.id}
                    data={data}
                    renderItem={({ item }) => {
                        return(
                            <CommunityCard style={styles.card}>
                                <Image style={{borderTopLeftRadius: 10, borderTopRightRadius: 10 }}  source={{ uri: thriverBucket + item.image_url}} />
                                <FlexView>
                                    <View>
                                        <CommunityTitle>{item.name}</CommunityTitle>
                                        <Description>R$14,90 por mês</Description>
                                    </View>
                                    
                                    <AccessButton onPress={() => navigate('Community', { id: item.id , name: item.name , image_url: item.image_url })}>
                                        <ButtonText>Access</ButtonText>
                                    </AccessButton>
                                </FlexView>

                                
                            </CommunityCard>
                        )
                    }}
                />

            </View>
        </Container>

       
    )
}

const styles = StyleSheet.create({
    card:{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    }
})

export default CommunityList