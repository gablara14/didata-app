import React, { useState } from 'react'
import { Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { thriverBucket } from '../../data/config.json'
import { SelectedCommunityOptions } from '../../components/profile/SelectedOptions'


const deviceWidth = Dimensions.get('window').width

const BackgroundImage = styled.Image`
    width: ${deviceWidth}px;
    height: 226px
`
const Title = styled.Text`
    font-size: 20px;
    font-weight: bold
`
const Subtitle = styled.Text`
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 15px
`

const MainContainer = styled.View`
    padding: 20px
`
const JoinButton = styled.TouchableOpacity`
    width: 100%;
    height: 30px;
    background-color: #D93511;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`

const JoinedButton = styled.TouchableOpacity`
    width: 100%;
    height: 30px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid #D93511
`

const ButtonText = styled.Text`
    font-size: 14px;
    font-weight: 300;
    color: white
`


const ButtonJoinedText = styled.Text`
    font-size: 14px;
    font-weight: 300;
    color: #D93511
`

const DarkLayer = styled.View`
  width: ${deviceWidth}px;
  height: 226px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  position: absolute;
`;

const CommunityScreen = ({ navigation }) => {

    const [ inside, setInside ] = useState(false)

    const id = navigation.getParam('id')
    const name = navigation.getParam('name')
    const image_url = navigation.getParam('image_url')

    const renderButton = () => {
        if (inside){
            return(
                <JoinedButton onPress={() => setInside(false)} >
                    <ButtonJoinedText>Joined</ButtonJoinedText>
                </JoinedButton>
            )
        } else {
            return(
                <JoinButton onPress={() => setInside(true)} >
                    <ButtonText>Join Now</ButtonText>
                </JoinButton>
            )

        }
    }

    return (
        <View>
            <ScrollView>
                <BackgroundImage
                    source={{ uri: thriverBucket + image_url }}
                />
                <DarkLayer />
                <MainContainer>
                    <View>
                        <Title>{name}</Title>
                        <Subtitle>Public Community - 190 members</Subtitle>

                        <View>
                            <Subtitle>
                                Nessa comunidade você irá aprender a desenvolver técnicas de quant operando ao vivo comigo.
                                Todos os dias irei gravar estratégicas que podem ser usadas para alavancar nosso negócio!
                            </Subtitle>
                        </View>
                        
                    </View>

                    {renderButton()}
                    
                </MainContainer>
                <SelectedCommunityOptions about />
                
            </ScrollView>
        </View>
    )
}



export default CommunityScreen