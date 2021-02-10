import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { navigate } from '../navigationRef'


const styles = StyleSheet.create({
    seeAll:{
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 4
        
    },
    text:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 12
    },
    createCommunityButton:{
        backgroundColor: 'red',
        width: '80%',
        padding: 15,
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 25
    }

})




export const SeeAll = ({ text, navigateTo }) => {
    return(
        <TouchableOpacity onPress={navigateTo ? () => navigate(navigateTo) : ''}   style={styles.seeAll} >
           <Text style={styles.text}>{ text ? text : 'SEE ALL' }</Text> 
        </TouchableOpacity>
    )
}


export const SeeOne = ({ text, navigateTo: { route, params } }) => {
    return(
        <TouchableOpacity onPress={route ? () => navigate(route, params) : ''}   style={styles.seeAll} >
           <Text style={styles.text}>{ text ? text : 'SEE ALL' }</Text> 
        </TouchableOpacity>
    )
}


export const CreateNewCommunity = () => {
    return(
        <TouchableOpacity  onPress={() => navigate('CreateCommunity')} style={styles.createCommunityButton} >
           <Text style={styles.text}>Create new community</Text> 
        </TouchableOpacity>
    )
}

export const ConfirmCreateNewCommunity = () => {
    return(
        <TouchableOpacity  style={styles.createCommunityButton} >
           <Text style={styles.text}>Create!</Text> 
        </TouchableOpacity>
    )
}

