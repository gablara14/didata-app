import React  from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import {
    Options,
    SelectedText
} from '../../screens/Home/authors/styles';

class OptionsComponent extends React.Component {
    state = { publications: true, communities: false }

    handleClick = () => {
        this.props.onClick()
        this.setState({ publications: !this.state.publications })
        this.setState({ communities: !this.state.communities })
    }

    renderOption(text, state){
        if (state){
            return (
                <View  style={{ borderBottomWidth: 2,  borderBottomStyle: 'solid', borderBottomColor: 'black' , padding: 12}}>
                    <SelectedText>{text}</SelectedText>
                </View>
            )
        } else {
            return (
                <TouchableOpacity onPress={this.handleClick}   style={{ padding: 12}}>
                    <Text>{text}</Text>
                </TouchableOpacity>
            )
        }
    }

    render(){
        return (
            <Options style={{ borderBottomWidth: 1,  borderBottomStyle: 'solid', borderBottomColor: 'rgba(0, 0, 0, 0.1)'}}>
                {this.renderOption(this.props.text[0], this.state.publications)}
                {this.renderOption(this.props.text[1], this.state.communities)}
            </Options>
        )
    }
}

export default OptionsComponent;