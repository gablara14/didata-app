import React from 'react'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { lightDark } from '../../styles/colors'

import styled from 'styled-components/native';


export const BackgroundImage = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 10px;
`;

export const DarkLayer = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
`;