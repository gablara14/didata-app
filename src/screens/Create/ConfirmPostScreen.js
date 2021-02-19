import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ConfirmImage from './components/ConfirmImage'
import ConfirmText from './components/ConfirmText'

export default class ConfirmPostScreen extends Component {
    render() {
        const type = this.props.navigation.getParam('type')
        const text = this.props.navigation.getParam('text')
        if(type === 'image'){
            return <ConfirmImage />
        }
        return <ConfirmText text={text} />
    }
}
