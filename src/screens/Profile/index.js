import React from 'react'
import {  StyleSheet,  Image, ScrollView, TouchableOpacity, Touchable } from 'react-native'
import { useSelector } from 'react-redux'
import {
    MaterialCommunityIcons,
    AntDesign,
    FontAwesome,
    MaterialIcons,
    Entypo
  } from '@expo/vector-icons';

import { didataBucket } from '../../data/config.json'

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
} from './styles';

import   SelectedOptions from '../../components/profile/SelectedOptions'

const Profile = ({ navigation }) => {

  const { name, imageURL, username, bio, _id } = useSelector(state => state.profile)



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
          {/* <MaterialIcons name="arrow-drop-down" size={24} color="black" /> */}
          <TouchableOpacity
            style={{ position: 'absolute', right: 13, top: 12 }}
            onPress={() => navigation.navigate('Settings')}
          >
            {/* <FontAwesome
              name="ellipsis-v"
              size={24}
              color="black"
            /> */}
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </TouchableOpacity>

        </Header>
        <ScrollView>
          <Content>
            <Image style={styles.image} source={{ uri: didataBucket + imageURL }} />
            <Username>@{username}</Username>
            <Stats>
              <StatsColumn>
                <StatsNumber>1950</StatsNumber>
                <StatsText>Following</StatsText>
              </StatsColumn>
              <Separator>|</Separator>
              <StatsColumn>
                <StatsNumber>650</StatsNumber>
                <StatsText>Followers</StatsText>
              </StatsColumn>
              <Separator>|</Separator>
              <StatsColumn>
                <StatsNumber>950</StatsNumber>
                <StatsText>Likes</StatsText>
              </StatsColumn>
            </Stats>
            <ProfileColumn>
              <ProfileEdit onPress={() => navigation.navigate('EditProfile')}>
                <ProfileText>Editar perfil</ProfileText>
              </ProfileEdit>
              {/* <Bookmark name="bookmark" size={24} color="black" /> */}
            </ProfileColumn>
            
            <StatsText>{bio}</StatsText>
            
          </Content>
          <SelectedOptions userId={_id} publications myProfile />
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
        borderRadius: 100
       
    }
})



export default Profile