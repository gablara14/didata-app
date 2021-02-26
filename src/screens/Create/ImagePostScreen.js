import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, Dimensions, ScrollView } from 'react-native'
import { TextArea, ImageSelectButton } from './styles'
import * as ImagePicker from 'expo-image-picker'
import Base64Binary from 'base64-arraybuffer'
import { didataBucket} from '../../data/config.json'
import styled from 'styled-components/native'
const windowWidth = Dimensions.get('window').width;
import { navigate } from '../../navigationRef'

const PROVISORY_CONTINUE_BUTTON = styled.TouchableOpacity`
    padding: 10px;
    font-size: 18px;
`

export default class ImagePostScreen extends Component {

    state = { text: '', imageURL: ''}




    handleTakePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
            base64: true
        })
        if (!result.cancelled) {
            //const arrayBuffer = Base64Binary.decode(result.base64)
            this.setState({ imageURL: result.base64})
        }  
    }

    handleChoosePhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
            base64: true
        })
        if (!result.cancelled) {
            //const arrayBuffer = Base64Binary.decode(result.base64)
            this.setState({ imageURL: result.base64})
        }  
    }


    render() {
        return (
            <SafeAreaView>
                
                <ScrollView style={{height: '100%'}}>
                    <Text>  IMAGE POST SCREEN </Text>
                    <PROVISORY_CONTINUE_BUTTON
                    onPress={() => navigate('ConfirmPost', { type: 'image', text: '', imageURL: this.state.imageURL })}
                >
                    <Text>Continue</Text>
                </PROVISORY_CONTINUE_BUTTON>
                    {/* <TextArea
                        placeholder="Add a subtitle"
                        multiline={true}
                        numberOfLines={50}
                        onChangeText={e => this.setState({text: e})}
                        value={this.state.text}
                        autoFocus
                    /> */}
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>

                        <ImageSelectButton onPress={this.handleTakePhoto}>
                            <Text>Take a Photo</Text>
                        </ImageSelectButton>
                        <ImageSelectButton onPress={this.handleChoosePhoto}>
                            <Text>Select a Photo</Text>
                        </ImageSelectButton>

                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        {
                            this.state.imageURL
                            ?  <Image
                                style={{width: windowWidth, height: windowWidth}}
                                source={{uri: `data:image/jpeg;base64,${this.state.imageURL}` }}/>
                            : null
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
