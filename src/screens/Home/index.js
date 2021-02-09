import React from 'react'
import { Text, View , ScrollView, TouchableOpacity } from 'react-native'
import { Container,  BigTitle  } from './styles'


import NewReleases from './components/NewReleases'
import TrendingAuthors from './components/TrendingAuthors'
import Hottest from './components/Hottest'
import Spacer from '../../components/Spacer'

import { FontAwesome } from '@expo/vector-icons';


const DATA = [
    { name: 'Primeiro Video', image_url: '/lp/section_1.png' },
    { name: 'Segundo Video', image_url: '/lp/section_2.png' },
    { name: 'Terceiro Video', image_url: '/lp/section_1.png' },
]

const AUTHORDATA = [
{ name: 'Jim Simons', image_url: '/didata_app/JIMSIMONS.jpg' },
{ name: 'George Soros', image_url: '/didata_app/george_soros.jfif' },
{ name: 'Nassim Taleb', image_url: '/didata_app/nassim_taleb.jfif' },
]


const Home = ({ navigation }) => {


       
   


    return(
        <Container >
            
            <ScrollView>


                   
                        <View style={{ marginLeft: 15, marginTop: 15 }}>
                            <BigTitle>Discover</BigTitle>
                        </View>
                   

                    <Spacer>
                        <NewReleases/>
                    </Spacer>
                    <Spacer>
                        <TrendingAuthors />

                    </Spacer>
                    <Spacer>
                        <Hottest/>
                    </Spacer>
            </ScrollView>

                
                
            
        </Container>
    )
}





export default Home