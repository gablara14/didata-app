import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import styled from 'styled-components/native'
import * as actions from '../../actions'
import { connect } from 'react-redux'
import { navigate } from '../../navigationRef'
import { NavigationEvents } from 'react-navigation'
const TagButton = styled.TouchableOpacity`
    background-color: #FF4646;
    padding: 10px 12px;
    border-radius: 4px
`

const SelectedButton = styled.TouchableOpacity`
    background-color: #cc0000;
    padding: 10px 12px;
    border-radius: 4px
`



const TagButtonText = styled.Text`
    font-size: 12px;
    color: white;
    font-weight: 300
`


class TagInput extends Component  {
    

    state = { }





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

    renderTagButton(item){

        let result = this.props.tagList.find((tag) => {
            return tag.id == item.id
        })
        if (result){
            return(
                <SelectedButton
                    onPress={() => this.props.deleteTag(item)}
                >
                    <TagButtonText >#{item.name}</TagButtonText>
                </SelectedButton>
            )
        }
        return(
            <TagButton
                onPress={() => this.props.selectTags(item)}
            >
                <TagButtonText >#{item.name}</TagButtonText>
            </TagButton>
    
        )





    }



    render(){
        return(
            <>
            <NavigationEvents onWillBlur={() => this.props.clearTags()} />
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={this.props.data}
                    keyExtractor={data => data.id}
                    renderItem={({item}) => {
                        return (
                            <View style={{ padding: 5}}> 
                                {this.renderTagButton(item)}

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



