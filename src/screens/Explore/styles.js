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

export const Search = styled.View`
  flex: 1;
  border-radius: 5px;
  align-items: center;
  padding: 10px 15px;
  margin-right: 15px;
  background: #ececec;
  flex-direction: row;
`;
export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
`;


export const FlexView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px
`

export const Flex = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%
`


export const BackgroundImage = styled.View`
  width: 100%;
  height: 100px;
  position: absolute;
  border-radius: 5px;
`;




export const DarkLayer = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
`;

export const BigTitle = styled.Text`
  font-size: 30px;
  font-weight: bold
`;

