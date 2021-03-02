import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { View, Text, TouchableOpacity } from 'react-native'
   
// import { NavigationEvents } from 'react-navigation'
// import {
  
//     SelectedText
// } from '../../screens/Home/authors/styles';
import Options from './Options'

import Publications from './Publications'
import Communities from './communities/Communities'
import CommunityDetail from './communities/CommunityDetail'
import {CreateNewCommunity} from '../Buttons'

 class SelectedOptions extends Component {
  state = { publications: true }
  handleClick = () => {
    this.setState({publications: !this.state.publications})
  }

    selectedOptions = () => {
        if (this.props.publications && this.state.publications){
            return(
              <>
                <Options onClick={this.handleClick} text={["Publications","Communities"]} />
                <Publications userData={this.props.userData} userId={this.props.userId}/>
              </>
            ) 
          } else {
            return(
              <>
                <Options onClick={this.handleClick} text={["Publications","Communities"]} />
                <Communities userId={this.props.userId} />
                { this.props.myProfile ? <CreateNewCommunity /> : <View />} 
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


