import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Touchable, FlatList, ActivityIndicator } from 'react-native'
import styled from 'styled-components/native';
import { navigate } from '../../navigationRef'
import CommunityImagePost from '../../screens/ContentScreens/components/CommunityImagePost'
import CommunityTextPost from '../../screens/ContentScreens/components/CommunityTextPost'
import CreatePublication from './CreatePublication'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import EmptyList from '../EmptyList'
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
          return <EmptyList text="The user does not has any publication" />
        }
        let publications = 0
        this.props.publications.forEach(el => {
          if (el.userId === this.props.userId){
            publications++
          }
        })
        if (publications === 0){
          return <EmptyList text="The user does not has any publication" />
        }
        return (
        <View>
          <View style={{alignItems: 'center', justifyContent: 'center', padding: 20, borderBottomColor: 'rgba(0,0,0,0.3)', borderBottomWidth: 0.5}}>
            <Text style={{ fontSize: 16, fontWeight: 'bold'}}>{publications} PUBLICATIONS</Text>
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
              if (item.userId !== this.props.userId){
                return <View style={{width: 10, height: 0.1}} ></View>
              }

              if (item.type === 'image') return < CommunityImagePost userData={this.props.userData} data={item} />
              return <CommunityTextPost userData={this.props.userData} data={item}/>

          }}
        />
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