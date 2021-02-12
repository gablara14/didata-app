import React, {Component} from 'react'
import { Text, View, FlatList } from 'react-native'
import styled from 'styled-components/native'
import Tags from './input-types/Tags'
import { connect } from 'react-redux'
import * as actions from '../actions'


const Container = styled.View`
    padding: 10px;
    margin-top: 15px
    
`
const Title = styled.Text`
    font-size: 18px;
    margin-bottom: 15px
    
`
const ItemView = styled.View`

`
const Label = styled.Text`
    font-size: 12px;
    color: rgba(0,0,0,0.6)
`
const Input = styled.TextInput`
    font-size: 16px;
    padding: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
`


const FIRSTDATA = [
    {id: '1', name:'business'},
    {id: '2', name:'javascript'},
    {id: '3', name:'investing'},
    {id: '4', name:'marketing'},
]
const SECONDDATA = [
    {id: '5', name:'python'},
    {id: '6', name:'startup'},
    {id: '7', name:'finances'},
    {id: '8', name:'politics'},
]
const THIRDATA = [
    {id: '9', name:'market'},
    {id: '10', name:'entrepreneurship'},
    {id: '11', name:'geopolitics'},
    {id: '12', name:'etc'},
]

class Form extends Component {

    inputType(type){
        if (type == 'tag'){
            return(
                <View>
                    <Text>
                        {this.props.tagList.map(tag => tag.name)}
                    </Text>
                    <Tags data={FIRSTDATA} />
                    <Tags data={SECONDDATA} />
                    <Tags data={THIRDATA} />
                </View>
            )
        } else {
            return <Input  style={{ borderBottomWidth: 0.5,  borderBottomStyle: 'solid', borderBottomColor: 'rgba(0,0,0,0.6)' }}  />
        }

    }

    render(){
        return (
            <Container>


                <Title>{this.props.title}</Title>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.props.data}
                    keyExtractor={data => data.id}
                    renderItem={({ item }) => {
                        return(
                        <ItemView>
                            <Label >{item.label}</Label>
                            {this.inputType(item.type)}
                            
                        </ItemView>
                        ) 
                    }}
                />
            </Container>
        )
    }

}

function mapStateToProps(state){
    return{
        tagList:  Object.values(state.tagList),
        profile: state.profile
    }
}

export default connect(mapStateToProps, {})(Form)