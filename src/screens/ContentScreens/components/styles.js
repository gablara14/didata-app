import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width;

export const FakeImage = styled.View`
width: ${windowWidth};
height: ${windowWidth};
background-color:  #C4C4C4
`


export const PostImage = styled.Image`
width: ${windowWidth};
height: ${windowWidth};
`





export const FakeUserImage = styled.View`
width: 45px;
height: 45px;
background-color: #C4C4C4;
border-radius: 50px
`

export const UserImage = styled.Image`
width: 45px;
height: 45px;
border-radius: 50px
`





export const FlexView = styled.View`
display: flex;
flex-direction: row;
padding: 10px;
align-items: center
`

export const Name = styled.Text`
font-size: 16px;
font-weight: bold
`
export const Username = styled.Text`
font-size: 14px;
font-weight: 500;
color: rgba(0,0,0,0.5)
`
export const Comment = styled.Text`
font-size: 12px;
font-weight: 300
`

export const CommentView = styled.View`
background-color: #E4E4E4;
padding: 10px
border-radius: 5px;
width: 80%;
margin-left: 10px
`
export const Container = styled.View`

margin-bottom: 70px
`
export const IconContainer = styled.View`

display: flex;
flex-direction: row;
`


export const IconAndInfo = styled.View`
border: 0.5px solid rgba(0,0,0,0.2);
`

export const PostInfo = styled.View`
display: flex;
flexDirection: row;
alignItems: center
`
export const PostInfoText = styled.Text`
font-weight: 500
`
export const Bold = styled.Text`
font-weight: bold
`