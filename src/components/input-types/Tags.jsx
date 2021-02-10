import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import styled from 'styled-components/native'
import * as actions from '../../actions'
import { connect } from 'react-redux'

const TagButton = styled.TouchableOpacity`
    background-color: #FF4646;
    padding: 10px 12px;
    border-radius: 4px

`
const TagButtonText = styled.Text`
    font-size: 12px;
    color: white;
    font-weight: 300
`


class TagInput extends Component  {
    




    render(){
        return(
            <>
               
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={this.props.data}
                    keyExtractor={data => data.id}
                    renderItem={({item}) => {
                        return (
                            <View style={{ padding: 5}}> 
                                <TagButton onPress={()  => this.props.selectTags(item.name)}>
                                    <TagButtonText >#{item.name}</TagButtonText>
                                </TagButton>
                            </View>
                        )
                    }}
                />
            </>
        )
    }
    


}

function mapStateToProps(state){
    return{
        tagList: state.tagList
    }
}


export default connect(mapStateToProps, actions)(TagInput)