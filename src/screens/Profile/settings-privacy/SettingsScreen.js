import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import SettingsComponent from '../components/SettingsComponent'


const FIRSTDATA = [
    { id:"1", text: 'Report a problem', iconName: 'arrumar', navigateTo: 'aleatorio' },
    { id:"2" ,text: 'Help Center', iconName: 'arrumar', navigateTo: 'aleatorio' },
    { id:"3", text: 'Safety Center', iconName: 'arrumar', navigateTo: 'aleatorio' },
    { id:"4", text: 'Creator Portal', iconName: 'arrumar', navigateTo: 'aleatorio' }
]

const SECONDDATA = [
    { id:"5", text: 'Community Guidelines', iconName: 'arrumar', navigateTo: 'aleatorio' },
    { id:"6" ,text: 'Terms of use', iconName: 'arrumar', navigateTo: 'aleatorio' },
    { id:"7", text: 'Copyright Policy', iconName: 'arrumar', navigateTo: 'aleatorio' },
    { id:"8", text: 'Privacy Policy', iconName: 'arrumar', navigateTo: 'aleatorio' }
]






const SettingsScreen = () => {
    return (
        <SafeAreaView>
            <SettingsComponent
                title="SUPPORT"
                data={FIRSTDATA}
            />
            <SettingsComponent
                title="ABOUT"
                data={SECONDDATA}
            />
        </SafeAreaView>
    )
}




export default SettingsScreen