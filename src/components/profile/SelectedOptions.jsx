import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { View, Text, TouchableOpacity } from 'react-native'
   
import { NavigationEvents } from 'react-navigation'
import {
    Options,
    SelectedText
} from '../../screens/Home/authors/styles';

import Publications from './Publications'
import Communities from './communities/Communities'
import CommunityDetail from './communities/CommunityDetail'
import {CreateNewCommunity} from '../Buttons'

 class SelectedOptions extends Component {

    state = { publications: true }

    selectedOptions = () => {
        if (this.props.publications && this.state.publications){
            return(
              <>
              <Options style={{ borderBottomWidth: 1,  borderBottomStyle: 'solid', borderBottomColor: 'rgba(0, 0, 0, 0.1)'}}>
                <View  style={{ borderBottomWidth: 2,  borderBottomStyle: 'solid', borderBottomColor: 'black' , padding: 12}}>
                  <SelectedText>
                    Publications
                  </SelectedText>
                </View>
    
                <TouchableOpacity onPress={() => this.setState({publications: false})}   style={{ padding: 12}}>
                  <Text>
                    Communities
                  </Text>
                </TouchableOpacity>
              </Options>
              
              <Publications
                userData={this.props.userData}
                userId={this.props.userId}
              />
            </>
            ) 
          } else {
            return(
              <>
            
              <Options style={{ borderBottomWidth: 1,  borderBottomStyle: 'solid', borderBottomColor: 'rgba(0, 0, 0, 0.1)'}}>
                <TouchableOpacity onPress={() => this.setState({publications: true})} style={{ padding: 12}}>
                  <Text>
                    Publications
                  </Text>
                </TouchableOpacity>
        
                <View  style={{ borderBottomWidth: 2,  borderBottomStyle: 'solid', borderBottomColor: 'black' , padding: 12}}>
                  <SelectedText >
                    Communities
                  </SelectedText>
                </View>
                </Options>
                <Communities
                  userId={this.props.userId}
                />
                {
                  this.props.myProfile
                  ? <CreateNewCommunity />
                  : <View />
                } 
              
            </>
            )
          }
    }


    render() {
        return this.selectedOptions()
    }
}

function mapStateToProps(state){
  return{
    communities: Object.values(state.communities) 
  }
}


export default connect(mapStateToProps, actions)(SelectedOptions)




export class  SelectedCommunityOptions extends Component {

    state = { about: true }

    selectedOptions = () => {
        if (this.props.about && this.state.about){
            return(
              <>
              <Options style={{ borderBottomWidth: 1,  borderBottomStyle: 'solid', borderBottomColor: 'rgba(0, 0, 0, 0.1)'}}>
                <View  style={{ borderBottomWidth: 2,  borderBottomStyle: 'solid', borderBottomColor: 'black' , padding: 12 }}>
                  <SelectedText >
                    About
                  </SelectedText>
                </View>
    
                <TouchableOpacity onPress={() => this.setState({about: false})}   style={{ padding: 12}}>
                  <Text>
                  Publications
                  </Text>
                </TouchableOpacity>
              </Options>
              <CommunityDetail />
              
              
            </>
            ) 
          } else {
            return(
              <>
              <Options style={{ borderBottomWidth: 1,  borderBottomStyle: 'solid', borderBottomColor: 'rgba(0, 0, 0, 0.1)'}}>
                <TouchableOpacity onPress={() => this.setState({about: true})} style={{ padding: 12}}>
                  <Text>
                    About
                  </Text>
                </TouchableOpacity>
        
                <View  style={{ borderBottomWidth: 2,  borderBottomStyle: 'solid', borderBottomColor: 'black' , padding: 12}}>
                  <SelectedText >
                    Publications
                  </SelectedText>
                </View>
                </Options>
                <Publications/>
            </>
            )
          }
    }


    render() {
        return this.selectedOptions()
    }
}
