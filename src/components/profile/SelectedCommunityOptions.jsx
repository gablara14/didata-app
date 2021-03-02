import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import Options from './Options'
import Publications from './Publications'
import CommunityDetail from './communities/CommunityDetail'



class  SelectedCommunityOptions extends Component {
    state = { about: this.props.about }
    handleClick = () => {
      this.setState({about: !this.state.about})
    }
    selectedOptions = () => {
        if (this.state.about){
            return(
              <>
                <Options onClick={this.handleClick} text={["About", "Publications"]} />
                <CommunityDetail />
              </>
            ) 
          } else {
            return(
              <>
                <Options onClick={this.handleClick} text={["About", "Publications"]} />
                <Publications/>
              </>
            )
          }
    }

    render() {
        return this.selectedOptions()
    }
}

export default connect(null ,actions)(SelectedCommunityOptions)