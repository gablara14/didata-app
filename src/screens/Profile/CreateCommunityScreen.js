import React, { Component } from 'react'
import { Text, View, SafeAreaView, ScrollView, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import { ImageFakeContainer, Input, FormContainer, FormTitle,  Label  } from './styles'
import { ConfirmCreateNewCommunity } from '../../components/Buttons'
import Tags from '../../components/input-types/Tags'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { NavigationEvents } from 'react-navigation'
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

class CreateCommunityScreen extends Component {



    state = {
        name:'',
        description: '',
        loader: false,
        imageURL: 'https://s2.glbimg.com/AN4Gw4fFNwjVdzG_oRCYN_-cvXI=/512x320/smart/e.glbimg.com/og/ed/f/original/2020/11/30/baby-yoda.jpg',
    }


    onSubmit = () => {

        console.log(this.props.tagList)
        console.log(this.props.tagList[1])


        this.setState({ loader: true })
        this.props.createCommunity({
            name: this.state.name,
            description: this.state.description,
            imageURL: this.state.imageURL,
            categories: this.props.tagList,
            userId: this.props.profile._id
        }).then(() => this.setState({ loader: false}))
    }



    renderInput(label, initialValue, onChangeText){
        return(
            <View>
                <Label>{label}</Label>
                <Input
                    value={initialValue}
                    onChangeText={onChangeText}
                    style={styles.input} />
            </View>
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

{/* 
                            <Text>
                                {this.props.tagList.map(tag => `${tag.name},`)}
                            </Text> */}
                            <Tags data={FIRSTDATA} />
                            <Tags data={SECONDDATA} />
                            <Tags data={THIRDATA} />


                        </View>
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