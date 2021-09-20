import styled from 'styled-components';
import colours from '../../data/colours';
import { slideInTop, fadeInLate } from '../keyframes';

export const Wrapper = styled.div`
  position: fixed;
  width: 50%;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;

export const DividerLine = styled.hr`
  width: 50%;
  border-color: ${colours.primary};
  animation: ${slideInTop} 2s linear;
`;

export const ContactInfo = styled.p`
  color: ${colours.primary};
  animation: ${fadeInLate} 5s linear;

  text-align: center;
`;
