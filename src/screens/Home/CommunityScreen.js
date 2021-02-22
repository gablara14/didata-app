import React, { Component } from 'react'
import { Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { thriverBucket } from '../../data/config.json'
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
    state = { inside: false}


    onSubmit = (follow, communityId) => {
        console.log(communityId)
        if (follow){
            this.props.followCommunity({
                userId: this.props.profile._id ,
                communityId: communityId
            }).then(() => {
                this.setState({ inside: true })
            })
        } else {
            this.props.unfollowCommunity({
                userId: this.props.profile._id ,
                communityId: communityId
            }).then(() => {
                this.setState({ inside: false })
            })
        }
    }


    renderButton(communityId) {
        if (this.state.inside){
            return(
                <JoinedButton onPress={() => this.onSubmit(false, communityId)} >
                    <ButtonJoinedText>Joined</ButtonJoinedText>
                </JoinedButton>
            )
        } else {
            return(
                <JoinButton onPress={() => this.onSubmit(true, communityId)}>
                    <ButtonText>Join Now</ButtonText>
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
        return (
            <View style={{ backgroundColor: 'white', height: '100%', width: '100%'}}>
                <ScrollView>
                    <BackgroundImage source={{ uri: thriverBucket + imageURL }} />
                    <DarkLayer />
                    <MainContainer>
                        <View>
                            <Title>{name}</Title>
                            <Subtitle>Public Community - 190 members</Subtitle>
                            <View>
                                <Subtitle>
                                    {categories ? categories.map(cat => {
                                        return '#' + cat + ' '
                                    }) : '' }
                                </Subtitle>
                                <Subtitle>{description}</Subtitle>
                            </View>
                        </View>
                        {this.renderButton(id)}
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
    }
}



export default connect(mapStateToProps, actions)(CommunityScreen)