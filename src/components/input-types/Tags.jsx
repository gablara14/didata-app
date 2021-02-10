import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import styled from 'styled-components/native'
import * as actions from '../../actions'
import { connect } from 'react-redux'
import { navigate } from '../../navigationRef'

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
    

    renderButton(item){

 

        if (this.props.tagList.length){
            let result =this.props.tagList.find((tag) => {
                return tag.id == item.id
            })
            if(result){
                this.props.deleteTag(item)
                console.log('delete')
            } else   {
                this.props.selectTags(item)
            }
        } else {
            this.props.selectTags(item)
            console.log('add')
        }


    }


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
                                <TagButton
                                    // onPress={()  => this.props.selectTags(item.name)}
                                    onPress={() => this.renderButton(item)}
                                >
                                    <TagButtonText >#{item.name}</TagButtonText>
                                </TagButton>
                            </View>
                            // this.renderButton(item)
                        )
                    }}
                />
            </>
        )
    }
    


}

function mapStateToProps(state){
    return{
        tagList:  Object.values(state.tagList),
    }
}


export default connect(mapStateToProps, actions)(TagInput)



