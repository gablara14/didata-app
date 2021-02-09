import React, {useState} from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image, Touchable } from 'react-native'
import {
    MaterialCommunityIcons,
    AntDesign,
    Ionicons,
    FontAwesome,
  } from '@expo/vector-icons';

  import { Container, Search, Header, Input, FlexView, BigTitle } from './styles';

import Categories from './components/Categories'
import SearchResultList from './components/SearchResultsList'

import { render } from 'react-dom';

const DATA = [
    { id: 1, name: 'TECHNOLOGY', image_url: '/didata_app/technology.jpg' },
    { id: 2, name: 'BUSINESS', image_url: '/didata_app/business.jpg' },
    { id: 3, name: 'FINANCE', image_url: '/didata_app/finance.jpg' },
    { id: 4, name: 'SCIENCE', image_url: '/didata_app/science.jfif' }
]






const Explore = () => {

    const [ search, setSearch ] = useState('')
    const [ searchFocus, setSearchFocus ] = useState(false)

    const cancelSearch = () => {
        setSearchFocus(false)
        setSearch('')
    }

    const renderCancelButton = () => {
        if (searchFocus){
            return(
                <TouchableOpacity onPress={cancelSearch}>
                    <Text  >Cancel</Text> 
                    
                </TouchableOpacity>
            )
        }
    }


    return(
        <Container>
            <ScrollView>
                <View style={{ marginLeft: 15, marginTop: 15 }}>
                    <BigTitle>Search</BigTitle>
                </View>
            <Header>

                <Search>
                    <AntDesign
                        style={{
                            paddingRight: 10,
                        }}
                        name="search1"
                        size={18}
                        color="#838383"
                    />
                    <Input
                        autoCorrect={false}
                        placeholder="Search"
                        value={search}
                        returnKeyType="search"
                        onChangeText={text => setSearch(text)}
                        onFocus={() => setSearchFocus(true)}
                        
                    />

                        {renderCancelButton()}




                </Search>
            
            </Header>
            { searchFocus ? <SearchResultList data={DATA} /> : <Categories data={DATA} /> }
            
            </ScrollView>
      </Container>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        marginTop: 5
    },
    searchView: {
        display:'flex',
        flexDirection: 'row',
        backgroundColor: 'red',

    },
    input: {
        borderRadius: 10,

    }
  })




export default Explore