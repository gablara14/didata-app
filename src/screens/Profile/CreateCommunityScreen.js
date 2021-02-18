import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, StyleSheet, FlatList, Switch, ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import { ImageFakeContainer, Input, FormContainer, FormTitle,  Label  } from './styles'
import { ConfirmCreateNewCommunity } from '../../components/Buttons'
import Tags from '../../components/input-types/Tags'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { NavigationEvents } from 'react-navigation'
import { Ionicons, FontAwesome5  } from '@expo/vector-icons';
import { navigate } from '../../navigationRef'

const FIRSTDATA = [
    {id: '1', name:'business'},
    {id: '2', name:'javascript'},
    {id: '3', name:'investing'},
    {id: '4', name:'marketing'},
]
const SECONDDATA = [
    {id: '5', name:'python'},
    {id: '6', name:'startup'},
    {id: '7', name:'finances'},
    {id: '8', name:'politics'},
]
const THIRDATA = [
    {id: '9', name:'market'},
    {id: '10', name:'entrepreneurship'},
    {id: '11', name:'geopolitics'},
    {id: '12', name:'etc'},
]

const CreateButton = styled.TouchableOpacity`
    background-color: red;
    width: 80%;
    padding: 15px;
    borderRadius: 4px;
    display: flex;
    alignItems: center;
    justifyContent: center;
    margin: 25px
`
const ButtonText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #fff
`

const DetailBlock = styled.View`
    padding: 15px;
`
const FlexView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
` 
const Body = styled.Text`
    color: rgba(0, 0, 0, 0.3);
    font-size: 12px
`

const ICONCOLOR = "rgba(0, 0, 0, 0.7)"
const Subtitle = styled.Text`
    font-size: 14px;
    margin-left: 5px;
    display: flex
`

class CreateCommunityScreen extends Component {



    state = {
        name:'',
        description: '',
        loader: false,
        closedComunnity: false,
        anyoneCanPost: false,
        hiddenCommunity: false,
        imageURL: 'https://s2.glbimg.com/AN4Gw4fFNwjVdzG_oRCYN_-cvXI=/512x320/smart/e.glbimg.com/og/ed/f/original/2020/11/30/baby-yoda.jpg',
    }


    onSubmit = () => {

        this.setState({ loader: true })
        this.props.createCommunity({
            name: this.state.name,
            description: this.state.description,
            imageURL: this.state.imageURL,
            categories: this.props.tagList,
            userId: this.props.profile._id,
            closedCommunity: this.state.closedComunnity,
            anyoneCanPost: this.state.anyoneCanPost,
            hiddenCommunity: this.state.hiddenCommunity
        }).then(() => {
            this.setState({ loader: false})
            navigate('Profile')
        } )
    }



    renderInput(label, initialValue, onChangeText){
        return(
            <View style={{padding: 10}}>
                <Label>{label}</Label>
                <Input
                    value={initialValue}
                    onChangeText={onChangeText}
                    style={styles.input} />
            </View>
        )
    }

    renderToggleOption(title, body, value, onChange){
        return(
            <FlexView >
            <DetailBlock style={{width: '80%'}}>
                <FlexView>
                    <Ionicons name="earth" size={18} color={ICONCOLOR} />
                    <Subtitle>{title}</Subtitle>
                </FlexView>
                <Body>
                    {body}
                </Body>
            </DetailBlock>
            <Switch
                    trackColor={{ false: "red", true: "red" }}
                    thumbColor={value ? "#fff" : "#fff"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={onChange}
                    value={value}
                />
            </FlexView>
        )
    }


    render(){
           return(
            <SafeAreaView>
                <NavigationEvents onWillBlur={() => this.props.clearTags()} />

                <ScrollView>
                    <ImageFakeContainer />
                    <FormContainer>
                        <FormTitle>Community Info</FormTitle>
                        {this.renderInput('Name of Community', this.state.name, (e) =>this.setState({name: e}))}
                        {this.renderInput('Community description', this.state.description, (e) =>this.setState({description: e}))}


                        <View>
                            <Label>Tags</Label>
                            <Tags data={FIRSTDATA} />
                            <Tags data={SECONDDATA} />
                            <Tags data={THIRDATA} />
                        </View>

                        <FormTitle>Settings</FormTitle>

                        {this.renderToggleOption(
                            'Closed Community',
                            'Only authorized users can view the content of the community',
                            this.state.closedComunnity,
                            () => this.setState({closedComunnity: !this.state.closedComunnity})
                        )}
                        {this.renderToggleOption(
                            'Anyone can post',
                            'Anyone can post in the community. If turned off, only you can post',
                            this.state.anyoneCanPost,
                            () => this.setState({anyoneCanPost: !this.state.anyoneCanPost})
                        )}
                        {this.renderToggleOption(
                            'Hidden Community',
                            'The community is not visible on your profile nor can it be found in searches, Only members who are invited or have the link can view it',
                            this.state.hiddenCommunity,
                            () => this.setState({hiddenCommunity: !this.state.hiddenCommunity})
                        )}

                    </FormContainer>
                    {/* <FormContainer>
                        <FormTitle>Community Info</FormTitle>
                        <View>
                            <Label>Name of Community </Label>
                            <Input style={styles.input} />
                        </View>
                    </FormContainer> */}
                    
                    <CreateButton onPress={this.onSubmit}>
                    {
                        this.state.loader
                        ? <ActivityIndicator size="small" color="white"/> 
                        : <ButtonText>Save!</ButtonText>
                    }
                    </CreateButton> 


     


                </ScrollView>
            </SafeAreaView>
        ) 
    }

}

const styles = StyleSheet.create({
    input:{
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0,0,0,0.6)'
    }
})


function MapStateToProps(state){
    return{
        tagList: Object.values(state.tagList),
        profile: state.profile
    }
}

export default connect(MapStateToProps, actions)(CreateCommunityScreen)