import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, ActivityIndicator, FlatList } from 'react-native'
import styled from 'styled-components/native';
import { thriverBucket, communitiesData } from '../../../data/config.json'
import { navigate } from '../../../navigationRef'
import { connect } from 'react-redux'
import * as actions from '../../../actions'

export const FlexButton = styled.TouchableOpacity`
  width: 100%;
  display: flex
  flex-direction: row;
  padding: 20px;
  align-items: center;
`
import { useSelector } from 'react-redux'
import { NavigationEvents } from 'react-navigation'

class Communities extends Component {

    state = {
        loading: true
    }

   componentDidMount(){
        this.props.fetchCommunitiesByUserId(this.props.userId).then(() => {
            this.setState({ loading: false })
        })
   }
    
    render(){
        if (this.state.loading){
            return <ActivityIndicator style={{marginTop: 20}} size="large" color="black"/> 
        }
        else if (!this.props.communities){
            return <Text>The use does not has any community</Text>
        }

            return (
        <>        
             
            <FlatList
                data={this.props.communities}
                keyExtractor={data => data._id}
                renderItem={({ item }) => {
                    return(
                        <View  style={{display:'flex', flexDirection:'row',  borderBottomWidth: 1,  borderBottomStyle: 'solid', borderBottomColor: 'rgba(0, 0, 0, 0.1)'}}>
                            <FlexButton 
                                onPress={() => navigate('Community',{ id: item.id, name: item.name, image_url: item.imageURL, description: item.description,
                                categories: item.categories})}
                            >
                                <Image source={{uri: item.imageURL  }} style={{backgroundColor:"#C4C4C4", height: 75, width: 75, borderRadius: 4}} />
                                <View style={{marginLeft: 15}}>
                                    <Text  style={{ fontSize: 16,  marginBottom: 5}}>
                                        {item.name}
                                    </Text>
                                    <Text style={{ fontSize: 11}}>
                                        Public community - 313112 members
                                    </Text>
                                </View>
            
                                <View>
            
                                </View>
                            </FlexButton>
                         </View>    
                    )
                }}
            />

        </>
    )
    }

}

function mapStateToProps(state){
    return{
        profile: state.profile,
        communities: Object.values(state.communities)
    }
}

export default connect(mapStateToProps, actions)(Communities) 

// <View  style={{display:'flex', flexDirection:'row',  borderBottomWidth: 1,  borderBottomStyle: 'solid', borderBottomColor: 'rgba(0, 0, 0, 0.1)'}}>
// <FlexButton>
//     <Image source={{uri: thriverBucket + communitiesData[2].image_url  }}  style={{backgroundColor:"#C4C4C4", height: 75, width: 75, borderRadius: 4}} />
//     <View style={{marginLeft: 15}}>
//         <Text  style={{ fontSize: 16,  marginBottom: 5}}>
//             {communitiesData[2].name}
//         </Text>
//         <Text style={{ fontSize: 11}}>
//             Public community - 11048 members
//         </Text>
//     </View>

//     <View>

//     </View>
// </FlexButton>

// </View>    