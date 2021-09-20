import { keyframes } from 'styled-components';
import colours from '../data/colours';

export const fadeOut = keyframes`
  30% {
    color: ${colours.fifth};
  }
  50% {
    color: white;
  }
  100% {
    color: ${colours.fifth};
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
}`;

export const fadeInLate = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  30% {
    opacity: 0;
    color: white;
  }
  60% {
    opacity: 0.2;
    }
  70% {
    opacity: 1;
}`;

export const fadeInSlow = keyframes`
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadeInJunction = keyframes`
  0% {
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }

`;

export const slideInTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-750px);
  }
  50% {
    opacity: 1;
    transform: translateY(-250px);
    transform: rotate(90deg)
  }
  60% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.5;
    transform: rotate(-45deg)
  }
  90% {
    opacity: 0.8;
    transform: translateY(0px);
    transform: rotate(15deg)
  }
`;

export const slideSide = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
`;
