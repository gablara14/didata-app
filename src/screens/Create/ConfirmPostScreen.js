import React, { Component } from 'react'
import { Text, View } from 'react-native'

import ConfirmText from './components/ConfirmText'

export default class ConfirmPostScreen extends Component {
    render() {
        const type = this.props.navigation.getParam('type')
        const text = this.props.navigation.getParam('text')
        if(type === 'image'){
            const imageURL = this.props.navigation.getParam('imageURL')
            return <ConfirmText text={text} type={type} imageURL={imageURL} />
        }
        return <ConfirmText text={text} type={type}/>
    }
}
