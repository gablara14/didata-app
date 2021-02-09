import React from 'react'
import { Text, View, FlatList } from 'react-native'
import styled from 'styled-components/native'
import Tags from './input-types/Tags'



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



const Form = ({ title, data }) => {

    const inputType = (type) => {
        if (type == 'tag'){
            return(
                <View>
                    <Tags data={['business', 'javascript', 'investing', 'marketing']} />
                    <Tags data={['business', 'javascript', 'investing', 'marketing']} />
                    <Tags data={['business', 'javascript', 'investing', 'marketing']} />
                </View>
            )
        } else {
            return <Input  style={{ borderBottomWidth: 0.5,  borderBottomStyle: 'solid', borderBottomColor: 'rgba(0,0,0,0.6)' }}  />
        }

    }


    return (
        <Container>
            <Title>{title}</Title>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={data => data.id}
                renderItem={({ item }) => {
                    return(
                    <ItemView>
                        <Label >{item.label}</Label>
                        {inputType(item.type)}
                        
                    </ItemView>
                    ) 
                }}
            />
        </Container>
    )
}


export default Form