import React, { Component } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import Options from './Options'
import Publications from './Publications'
import CommunityDetail from './communities/CommunityDetail'
import EmptyList from '../EmptyList'
import _ from 'lodash'
import CommunityImagePost from '../../screens/ContentScreens/components/CommunityImagePost'
import CommunityTextPost from '../../screens/ContentScreens/components/CommunityTextPost'
const FAKEUSERDATA = {
    _id: 'dasdas12312',
    imageURL: '2123123123',
    username: 'fakeuserdata',
    name: 'fakeuserdata'
}

class  SelectedCommunityOptions extends Component {
    state = { about: this.props.about, loading: true }

    componentDidMount(){
        this.props.fetchPublicationsByCommunityId(this.props.communityId).then(() => {
            this.setState({ loading: false })
        })
    }

    handleClick = () => {
      this.setState({about: !this.state.about})
    }

    renderPublications() {
        if (this.state.loading){
            return <ActivityIndicator style={{marginTop: 20}} size="large" color="black"/> 
        }

        let publications = 0

        this.props.publications.forEach(el => {
          if (el.communityId === this.props.communityId){
            publications++
          }
        })
        if (publications === 0 || !this.props.publications.length){
            return <EmptyList text="The community does not has any publication" />
        }
        return(
            <FlatList
            data={_.reverse(this.props.publications)}
            keyExtractor={data => data._id}
            renderItem={({ item }) => {
                if (item.communityId !== this.props.communityId){
                  return <View style={{width: 10, height: 0.1}} ></View>
                }
  
                if (item.type === 'image') return < CommunityImagePost userData={FAKEUSERDATA} data={item} />
                return <CommunityTextPost userData={this.props.userData} data={item}/>
  
            }} />
        )
    }


    selectedOptions = () => {
        if (this.state.about){
            return(
              <>
                <Options onClick={this.handleClick} text={["About", "Publications"]} />
                <CommunityDetail />
              </>
            ) 
          } 
        return(
            <>
                <Options onClick={this.handleClick} text={["About", "Publications"]} />
                {this.renderPublications()}
            </>
        )
          
    }

    render() {
        return this.selectedOptions()
    }
}

const mapStateToProps = (state) => {
    return {
        publications: Object.values(state.publications) 
    }
}


export default connect(mapStateToProps ,actions)(SelectedCommunityOptions)