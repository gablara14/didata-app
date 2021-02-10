import React, { Component } from 'react'


import { Text, View, FlatList, TouchableOpacity, Touchable, Alert } from 'react-native'
import { AntDesign, Feather, MaterialIcons   } from '@expo/vector-icons'; 

import * as actions from '../../../actions'
import { connect } from 'react-redux'
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
    font-size: 14px;
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



class SettingsComponent extends Component {

    render(){
            return(
        <Container>
            <TitleContainer>
                <Title>{this.props.title}</Title>
            </TitleContainer>
            
            <FlatList
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={data => data.id}
                data={this.props.data}
                renderItem={({ item }) => {
                    return(
                        <TouchableOpacity
                            // onPress={() => navigate(item.navigateTo)}
                            onPress={() => Alert.alert(
                                'Logout',
                                'Do you want to logout?',
                                [
                                  {       
                                    text: 'Cancel',       
                                    onPress: () => console.log('Cancel Pressed'),       
                                    style: 'cancel',     
                                  },     
                                  {
                                    text: 'OK', 
                                    onPress: () => this.props.signOut()
                                  },   
                                ],   
                                { cancelable: false }, 
                              )}
                        >
                            <ItemContainer>

                               
                                <FlexView>
                                    <MaterialIcons name={item.iconName} size={20} color="black" />
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

}


export default connect(null, actions)(SettingsComponent) 