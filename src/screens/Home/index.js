import React, { Component } from 'react'
import { Text, View , ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Container,  BigTitle, Subtitle, NotFollowingText, Title, FlexView  } from './styles'

import { connect } from 'react-redux'
import * as actions from '../../actions'
import NewReleases from './components/NewReleases'

import Spacer from '../../components/Spacer'

import { TrendingAuthors, HottestCommunities } from '../../components/Carousel.jsx'

import { FontAwesome } from '@expo/vector-icons';

class Home extends Component {

    
    state = { loadingUsers: true, loadingCommunities: true }

    componentDidMount(){
        this.props.fetchUsers().then(() => {
            this.setState({ loadingUsers: false })
        })
        this.props.fetchCommunities().then(() => {
            this.setState({ loadingCommunities: false })
        })
    }

    render() {
        if (this.state.loadingUsers || this.state.loadingCommunities){
            return <ActivityIndicator size="large" color="black" />
        }

        return(
            <Container >
                <ScrollView>
                            <View style={{ marginLeft: 15, marginTop: 15 }}>
                                <BigTitle style={{ fontFamily: 'Circular_Black'}} >Discover</BigTitle>
                            </View>
                        {/* <Spacer>
                            <NewReleases/>
                        </Spacer> */}
                        <Spacer>
                            <FlexView>
                                <Title style={{ fontFamily: 'Circular_Black'}}> Hottest Communities </Title>
                                {/* <SeeAll/> */}
                            </FlexView>
                            <View>
                                {/* <Hottest data={DATA} /> */}
                                <HottestCommunities data={this.props.communities} />
                            </View>
                        </Spacer>

                        <Spacer>
                            <FlexView>
                                <Title style={{fontFamily: 'Circular_Bold'}}>Post Feed</Title>
                                <Subtitle style={{paddingVertical: 5, fontFamily: 'Circular_Bold'}}>Posts from communities you are in</Subtitle>
                                <NotFollowingText style={{ fontFamily: 'Circular_Bold'}}>
                                    You aren’t following any community yet. We recommend these authors with similar interests:
                                </NotFollowingText>
                            </FlexView>
                            <View>
                                <TrendingAuthors data={this.props.users} /> 
                            </View>
                        </Spacer>
                </ScrollView>
            </Container>
        )
    }

}


function mapStateToProps(state){
    return{
        communities: Object.values(state.communities),
        users: Object.values(state.users),
    }
}


export default connect(mapStateToProps, actions)(Home)