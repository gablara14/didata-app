import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Hottest, HottestCommunities } from '../../../components/Carousel'
import { SeeAll } from '../../../components/Buttons'
import {  Title, FlexView, ScrollView } from '../styles'
import { connect } from 'react-redux'
import * as actions from '../../../actions'

const DATA = [
    { name: 'Building a Quant Machine', image_url: '/didata_app/quant.jfif' },
    { name: 'How I made my first million', image_url: '/didata_app/dolar.jfif' },
    { name: 'Is Tesla a bubble?', image_url: '/didata_app/tesla.jpg' },
]


class HottestComponent extends Component{

    state = { loading: true }

    componentDidMount(){
        this.props.fetchCommunities().then(() => {
            this.setState({ loading: false })
        })
    }

    render(){
        if (this.state.loading){
            return <ActivityIndicator size="large" color="black" />
        }
        return (
            <ScrollView>
                <FlexView>
                    <Title style={{ fontFamily: 'Circular_Black'}}> Hottest Communities </Title>
                    {/* <SeeAll/> */}
                </FlexView>
                <View>
                    {/* <Hottest data={DATA} /> */}
                    <HottestCommunities data={this.props.communities} />
                </View>
            </ScrollView>
        )        
    }

}

function mapStateToProps(state){
    return{
        communities: Object.values(state.communities)
    }
}

export default connect( mapStateToProps, actions)(HottestComponent)