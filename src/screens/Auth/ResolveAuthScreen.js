import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class ResolveAuthScreen extends Component {

    componentDidMount(){
        this.props.tryLocalSignin()
    }


    render(){
        return null
    }
}

export default connect(null, actions)(ResolveAuthScreen) 