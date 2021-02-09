import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'


import {
    FontAwesome,
    MaterialCommunityIcons,
    AntDesign,
  } from '@expo/vector-icons';
  import Icon from 'react-native-vector-icons/Ionicons'
import { Camera } from 'expo-camera';

import {
    Container,
    RecordButton,
    Header,
    Row,
    Button,
    Description,
  } from './styles';

const Create = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);


    useEffect(() => {
        async function permission(){
          const { status } = await Camera.requestPermissionsAsync();
          setHasPermission(status === 'granted');
          StatusBar.setHidden(true);
        }
        permission();
      }, []);
    
      if (hasPermission === null) {
        return <View />;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }
    
    return(
        <Camera style={{ flex: 1 }} type={type}>
        <Container>
          <Header>
            <Button
              onPress={() => {
                StatusBar.setHidden(false);
                navigation.goBack();
              }}
            >
              <AntDesign name="close" size={28} color="#fff" />
            </Button>
            <Button>
              <Row>
                <FontAwesome name="music" size={18} color="#fff" />
                <Description>Sons</Description>
              </Row>
            </Button>
            <Button
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back,
                );
              }}
            >
              <MaterialCommunityIcons
                name="rotate-right"
                size={28}
                color="#fff"
              />
            </Button>
          </Header>
          <RecordButton />
        </Container>
      </Camera>
    )
}



const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })


  

export default Create