import React from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { Wrapper, AuthorsList } from './styles'
import AuthorListItem from '../../../components/AuthorListItem'

const AUTHORDATA = [
    { name: 'Jim Simons', username: 'jimsimons', image_url: '/didata_app/JIMSIMONS.jpg', id: '1' },
    { name: 'George Soros', username: 'georgesoros', image_url: '/didata_app/george_soros.jfif', id: '2' },
    { name: 'Nassim Taleb', username: 'nassim.taleb', image_url: '/didata_app/nassim_taleb.jfif', id: '3' },
]

const AuthorsSeeAll = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>TESTE</Text>
            
                    <AuthorListItem
                        
                        data={AUTHORDATA}
                    />
            
            </ScrollView>
        </SafeAreaView>

    )
}   

export default AuthorsSeeAll