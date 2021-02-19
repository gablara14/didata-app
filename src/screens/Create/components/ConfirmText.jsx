import React, { Component } from 'react'
import { Text, SafeAreaView, View, ActivityIndicator  } from 'react-native'
import styled from 'styled-components/native'
import { ConfirmCreateNewCommunity } from '../../../components/Buttons'
import {Picker} from '@react-native-picker/picker';

import { connect } from 'react-redux'
import * as actions from '../../../actions'

const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 15px
`

const CommunitySelector = styled.View`
    border: 0.5px solid rgba(0,0,0,0.3);
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 55px;
    width: 100%;
    padding: 5px
`

const TextContainer = styled.View`
    height: 500px;
    border: 0.5px solid rgba(0,0,0,0.3);
    border-radius: 4px;
    width: 100%;
    margin-top: 15px;
    padding: 5px
`

const CommunityImage =  styled.Image`
    width: 42px;
    height: 42px;
    border-radius: 4px;
    margin-left: 5px;
    margin-right: 5px
`



class ConfirmText extends Component {

    state = { itemValue: this.props.communities[0]._id || '' , itemIndex: '', loading: false, loadingButton: false}

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


    render() {
        if (!this.props.communities){ return ''}
        return (
            <SafeAreaView>
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
                        <Text>
                            {this.props.text}
                        </Text>
                    </TextContainer>

                    { this.state.loadingButton
                        ? <ConfirmCreateNewCommunity loading onSubmit={() => console.log('') }/>
                        :  <ConfirmCreateNewCommunity onSubmit={() =>{
                            this.setState({ loadingButton: true })
                            this.props.createPublication({
                                type: 'text',
                                userId: this.props.profile._id,
                                communityId: this.state.itemValue,
                                body: this.props.text
                            }).then(() => this.setState({ loadingButton: false }))}}/>
                    }

                </Container>
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