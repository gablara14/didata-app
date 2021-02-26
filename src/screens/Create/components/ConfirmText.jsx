import React, { Component } from 'react'
import { Text, SafeAreaView, View, ActivityIndicator, TextInput, ScrollView  } from 'react-native'

import {
    Container,
    CommunitySelector,
    TextContainer,
    CommunityImage
} from './styles'

import { ConfirmCreateNewCommunity } from '../../../components/Buttons'
import {Picker} from '@react-native-picker/picker';

import { connect } from 'react-redux'
import * as actions from '../../../actions'
import Base64Binary from 'base64-arraybuffer'

class ConfirmText extends Component {

    state = { text: this.props.text, itemValue: this.props.communities[0]._id || '' , itemIndex: '', loading: false, loadingButton: false}

    async componentDidMount(){
        this.setState({ loading: true })
        await this.props.fetchCommunitiesByUserId(this.props.profile._id)
        this.setState({ loading: false })
       
    }


    renderItems(){
        return this.props.communities.map(com => {
            return(
                <Picker.Item key={com._id} label={com.name} value={com._id} />
            )
        })
    }

    handleSubmit = async () => {
        this.setState({ loadingButton: true })

        if (this.props.type !== 'image'){
            await this.props.createPublication({
                type: this.props.type,
                userId: this.props.profile._id,
                communityId: this.state.itemValue,
                body: this.state.text
            })
        } else {
            const arrayBuffer = Base64Binary.decode(this.props.imageURL)
            await this.props.createImagePublication({
                type: this.props.type,
                userId: this.props.profile._id,
                communityId: this.state.itemValue,
                file: arrayBuffer,
                body: this.state.text
            })
        }
            
        this.setState({ loadingButton: false })
    }


    render() {
        if (!this.props.communities){ return ''}
        return (
            <SafeAreaView>
                <ScrollView>
                <Container>

                    {/* <CommunitySelector>
                        <CommunityImage source={{ uri: 'https://s2.glbimg.com/AN4Gw4fFNwjVdzG_oRCYN_-cvXI=/512x320/smart/e.glbimg.com/og/ed/f/original/2020/11/30/baby-yoda.jpg' }} />
                        <Text> Select a Community </Text>
                    </CommunitySelector> */}
                    <Text>Select a Community </Text>
                        <Picker
                        selectedValue={this.state.itemValue}
                        style={{height: 60, marginBottom: 30, width: 350}}
                        itemStyle={{ fontSize: 14,  height: 100,}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({itemValue: itemValue})
                        }>
                            {this.renderItems()}
                        </Picker>

                    <TextContainer>

                        <TextInput
                            
                            multiline={true}
                            numberOfLines={50}
                            onChangeText={e => this.setState({text:e})}
                            value={this.state.text}
                        />
                    </TextContainer>
                    

                    { this.state.loadingButton
                        ? <ConfirmCreateNewCommunity loading onSubmit={() => console.log('') }/>
                        :  <ConfirmCreateNewCommunity onSubmit={this.handleSubmit}/>
                    }

                </Container>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

function mapStateToProps(state){
    return{
        profile: state.auth.profile,
        communities: Object.values(state.communities)
    }
}


export default connect(mapStateToProps, actions)(ConfirmText)