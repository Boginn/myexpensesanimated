import styled from 'styled-components';
import colours from '../../data/colours';

export const Wrapper = styled.div`
  background-color: ${colours.fourth};
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px 1px black;

  margin: auto;
  overflow: hidden;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;
