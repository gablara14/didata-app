import { getStatusBarHeight } from 'react-native-status-bar-height';

import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  paddingTop: getStatusBarHeight(),
})`
  flex: 1;
  background: #fff;
  
`;

export const Header = styled.View`
  margin: 10px;
  margin-right: 15px;
  flex-direction: row;
  align-items: center;
`;





export const BackgroundImage = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 3px;
`;


export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold
`;

export const BigTitle = styled.Text`
  font-size: 30px;
  font-weight: bold
`;



export const FlexView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px
`

export const ScrollView = styled.View`
  width: 100%;
`;
