import React, { useState } from 'react'
import {  StyleSheet,  Image, ScrollView, Text, View, TouchableOpacity } from 'react-native'
import {
    MaterialCommunityIcons,
    AntDesign,
    FontAwesome,
    MaterialIcons,
  } from '@expo/vector-icons';

import {
    Container,
    Title,
    Header,
    Avatar,
    Username,
    Content,
    Stats,
    Separator,
    StatsText,
    StatsColumn,
    StatsNumber,
    ProfileColumn,
    ProfileEdit,
    ProfileText,
    Bookmark,
    Options,
   
    SelectedText
} from './styles';



import {SelectedOptions} from '../components/SelectedOptions'

import { thriverBucket } from '../../../data/config.json'

const AuthorScreen = ({ navigation }) => {

    const [ publications, setPublications ] = useState(true)

    const id = navigation.getParam('id')
    const name = navigation.getParam('name')
    const image_url = navigation.getParam('image_url')



  

    return(
        <Container>
        <Header>
          {/* <AntDesign
            style={{ position: 'absolute', left: 10, top: 10 }}
            name="adduser"
            size={24}
            color="black"
          /> */}
          <Title>{name}</Title>
          
          {/* <FontAwesome
            style={{ position: 'absolute', right: 13, top: 12 }}
            name="ellipsis-v"
            size={24}
            color="black"
          /> */}
        </Header>
        <ScrollView>
          <Content>
            <Image style={styles.image} source={{ uri: thriverBucket + image_url }} />
            
            <Username>{name}</Username>
            <Stats>
              <StatsColumn>
                <StatsNumber>{ Math.floor(Math.random() * 1000) }</StatsNumber>
                <StatsText>Following</StatsText>
              </StatsColumn>
              <Separator>|</Separator>
              <StatsColumn>
                <StatsNumber>{ Math.floor(Math.random() * 10000) }</StatsNumber>
                <StatsText>Followers</StatsText>
              </StatsColumn>
              <Separator>|</Separator>
              <StatsColumn>
                <StatsNumber>{ Math.floor(Math.random() * 4000) }</StatsNumber>
                <StatsText>Likes</StatsText>
              </StatsColumn>
            </Stats>
            <ProfileColumn>
              <ProfileEdit>
                <ProfileText>  Follow  </ProfileText>
              </ProfileEdit>
                {/* <MaterialIcons name="arrow-drop-down" size={24} color="black" /> */}
            </ProfileColumn>
  
            <StatsText>The best investor of all time</StatsText>
          </Content>

          
           <SelectedOptions publications={true} />
          





        </ScrollView>
      </Container>
    )
}



const styles = StyleSheet.create({
    container: {
      flex:1,
    //   justifyContent: 'center',
    //   alignItems: 'center'
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 100,
       
       
    }
})



export default AuthorScreen