import styled from 'styled-components';
import { fadeOut } from '../keyframes';
import colours from '../../data/colours';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const LoadingIcon = styled.span`
  background-color: ${colours.fifth};
  color: ${colours.fifth};
  padding: 10px;

  animation: ${fadeOut} 7s linear;
`;
