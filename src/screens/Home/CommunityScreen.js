import React, { Component } from 'react'
import { Text, View, Dimensions, TouchableOpacity, ScrollView, ActivityIndicator  } from 'react-native'
import styled from 'styled-components/native'
import { didataBucket } from '../../data/config.json'
import { SelectedCommunityOptions } from '../../components/profile/SelectedOptions'
import { connect } from 'react-redux'
import * as actions from '../../actions'



const deviceWidth = Dimensions.get('window').width
const BackgroundImage = styled.Image`
    width: ${deviceWidth}px;
    height: 226px
`
const Title = styled.Text`
    font-size: 20px;
    font-weight: bold
`
const Subtitle = styled.Text`
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 15px
`
const MainContainer = styled.View`
    padding: 20px
`
const JoinButton = styled.TouchableOpacity`
    width: 100%;
    height: 30px;
    background-color: #D93511;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`
const JoinedButton = styled.TouchableOpacity`
    width: 100%;
    height: 30px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid #D93511
`
const ButtonText = styled.Text`
    font-size: 14px;
    font-weight: 300;
    color: white
`
const ButtonJoinedText = styled.Text`
    font-size: 14px;
    font-weight: 300;
    color: #D93511
`
const DarkLayer = styled.View`
  width: ${deviceWidth}px;
  height: 226px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  position: absolute;
`;

class CommunityScreen extends Component {

    // const [ inside, setInside ] = useState(false)
    state = { loader: false, members: this.props.navigation.getParam('members')}


    onSubmit = (follow, communityId) => {
        this.setState({loader: true})
        if (follow){
            this.props.followCommunity({
                userId: this.props.profile._id ,
                communityId: communityId
            }).then(() => {
                this.setState({ loader: false })
                this.setState({ members: this.state.members + 1})
            })
        } else {
            this.props.unfollowCommunity({
                userId: this.props.profile._id ,
                communityId: communityId
            }).then(() => {
                this.setState({ loader: false })
                this.setState({ members: this.state.members - 1})
            })
        }
    }

    renderButtonText(text, color) {
        if (this.state.loader) return <ActivityIndicator size="small" color={color}/> 
        else return text
    }


    renderButton(communityId, userId) {
        const followingList = this.props.followingList.map(({communityId}) => communityId)
        const isUserInside =  followingList.includes(communityId)
        
        if (this.props.profile._id === userId){
            return <TouchableOpacity><Text>Edit</Text></TouchableOpacity>
        }


        if (isUserInside){
            return(
                <JoinedButton onPress={() => this.onSubmit(false, communityId)} >
                    <ButtonJoinedText>
                        {this.renderButtonText('Joined', 'black')}
                    </ButtonJoinedText>
                </JoinedButton>
            )
        } else {
            return(
                <JoinButton onPress={() => this.onSubmit(true, communityId)}>
                    <ButtonText>
                        {this.renderButtonText('Join Now', 'white')}
                    </ButtonText>
                </JoinButton>
            )
        }
    }

    render(){
        const id = this.props.navigation.getParam('id')
        const name = this.props.navigation.getParam('name')
        const imageURL = this.props.navigation.getParam('imageURL')
        const description = this.props.navigation.getParam('description')
        const categories = this.props.navigation.getParam('categories')
        const userId = this.props.navigation.getParam('userId')
        // const members = this.props.navigation.getParam('members')
        return (
            <View style={{ backgroundColor: 'white', height: '100%', width: '100%'}}>
                <ScrollView>
                    <BackgroundImage source={{ uri: didataBucket + imageURL }} />
                    <DarkLayer />
                    <MainContainer>
                        <View>
                            <Title>{name}</Title>
                            <Subtitle>Public Community - {this.state.members} members</Subtitle>
                            <View>
                                <Subtitle>
                                    {categories ? categories.map(cat => {
                                        return '#' + cat + ' '
                                    }) : '' }
                                </Subtitle>
                                <Subtitle>{description}</Subtitle>
                            </View>
                        </View>
                        <View style={{alignItems: 'center', justifyContent:'center'}}>
                            {this.renderButton(id, userId)}
                        </View>

                    </MainContainer>
                    <SelectedCommunityOptions about />
                </ScrollView>
            </View>
        )
    }

}

function mapStateToProps(state){
    return {
        profile: state.auth.profile,
        followingList: Object.values(state.followingList)
    }
}



export default connect(mapStateToProps, actions)(CommunityScreen)