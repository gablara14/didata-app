import React, { Component } from 'react'
import {  Title, FlexView, ScrollView , Subtitle, NotFollowingText } from '../styles'
import { View, ActivityIndicator } from 'react-native'
import { TrendingAuthors} from '../../../components/Carousel'
import { SeeAll } from '../../../components/Buttons'
import { connect } from 'react-redux'
import * as actions from '../../../actions'



class TrendingAuthorsComponent extends Component {

    state = { loading: true }

    componentDidMount(){
        this.props.fetchUsers().then(() => {
            this.setState({ loading: false })
        })
    }

    render(){
        if (this.state.loading){
            return <ActivityIndicator size="large" color="black" />
        }
        return (
                <View>
                    <TrendingAuthors data={this.props.users} /> 
                </View>
        )        
    }

}

function mapStateToProps(state){
    return{
        users: Object.values(state.users),
    }
}

export default connect(mapStateToProps, actions)(TrendingAuthorsComponent)