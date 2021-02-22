import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Touchable, FlatList, ActivityIndicator } from 'react-native'
import styled from 'styled-components/native';
import { navigate } from '../../navigationRef'
import CommunityImagePost from '../../screens/ContentScreens/components/CommunityImagePost'
import CommunityTextPost from '../../screens/ContentScreens/components/CommunityTextPost'
import CreatePublication from './CreatePublication'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import _ from 'lodash'

export const FlexView = styled.View`
  width: 100%;
  display: flex
  flex-direction: row;
`

class Publications extends Component {

  state = {
    loading: true
  }

componentDidMount(){
    this.props.fetchPublicationsByUserId(this.props.userId).then(() => {
        this.setState({ loading: false })
        console.log(this.props.publications)
    })
}



  render(){
        if (this.state.loading){
          return <ActivityIndicator style={{marginTop: 20}} size="large" color="black"/> 
        }
        if (!this.props.publications.length){
          return <View />
        }
        return (
        <View>
        {/* <FlexView>
          
          <TouchableOpacity onPress={() => navigate('CommunityPosts')}  style={{ backgroundColor: '#ff9', width: '33%', height: 125, borderStyle: 'solid', borderColor: 'white', borderWidth: 1}} />
          
         
          <View style={{ backgroundColor: '#ff9', width: '33%', height: 125, borderStyle: 'solid', borderColor: 'white', borderWidth: 1}} />
          <View style={{ backgroundColor: '#ff9', width: '33%', height: 125, borderStyle: 'solid', borderColor: 'white', borderWidth: 1}} />
        </FlexView>
        <FlexView>
          <View style={{ backgroundColor: '#ff9', width: '33%', height: 125, borderStyle: 'solid', borderColor: 'white', borderWidth: 1}} />
          <View style={{ backgroundColor: '#ff9', width: '33%', height: 125, borderStyle: 'solid', borderColor: 'white', borderWidth: 1}} />
          <View style={{ backgroundColor: '#ff9', width: '33%', height: 125, borderStyle: 'solid', borderColor: 'white', borderWidth: 1}} />
        </FlexView>
        <FlexView>
          <View style={{ backgroundColor: '#ff9', width: '33%', height: 125, borderStyle: 'solid', borderColor: 'white', borderWidth: 1}} />
          <View style={{ backgroundColor: '#ff9', width: '33%', height: 125, borderStyle: 'solid', borderColor: 'white', borderWidth: 1}} />
          <View style={{ backgroundColor: '#ff9', width: '33%', height: 125, borderStyle: 'solid', borderColor: 'white', borderWidth: 1}} />
        </FlexView> */}
        <View style={{alignItems: 'center', justifyContent: 'center', padding: 20, borderBottomColor: 'rgba(0,0,0,0.3)', borderBottomWidth: 0.5}}>
          <Text style={{ fontSize: 16, fontWeight: 'bold'}}>63 PUBLICATIONS</Text>
        </View>
        <View>
          {
            this.props.userId === this.props.profile._id 
            ? <CreatePublication />
            : <View />
          }
          

        <FlatList
          data={_.reverse(this.props.publications)}
          keyExtractor={data => data._id}
          renderItem={({ item }) => {
              if (item.type === 'image') return < CommunityImagePost data={item} />
              else {
                if (item.userId === this.props.userId){
                  return <CommunityTextPost data={item}/>
                }
                return 
              } 
          }}
        />



{/* 
          <CommunityTextPost />
          < CommunityImagePost />
          < CommunityImagePost />
          < CommunityImagePost />
          < CommunityImagePost />
          < CommunityImagePost /> */}
{/* 
          <FlatList
            data={}
            keyExtractor={data => data.id}
            renderItem={({ item }) => {
              if (item.type === 'image'){
                return  < CommunityPost />
              } else {
                return // TextPost
              }
            }}
          /> */}

        </View>
      </View>      
    )
  }

}
function mapStateToProps(state){
  return {
    profile: state.auth.profile,
    publications: Object.values(state.publications) 
  }
}


export default connect(mapStateToProps, actions)(Publications)