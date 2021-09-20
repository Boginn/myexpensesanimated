import styled from 'styled-components';
import colours from '../../data/colours';
import { fadeIn, fadeInJunction } from '../keyframes';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5em;

  color: white;
  padding: 1em;
  background-color: ${colours.sixth};

  height: 20rem;
  border-left: 1px solid ${colours.primary};

  overflow-y: auto;
  overflow-x: hidden;
  max-width: 400px;
  min-width: 400px;
`;

export const List = styled.ul`
  max-height: 200px;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Sum = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;

  animation: ${fadeInJunction} 3s linear;
`;

export const ItemWrapper = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: linear-gradient(
    95deg,
    ${colours.fifth} 10%,
    ${colours.fourth} 95%
  );

  margin-top: 4px;
  margin-bottom: 4px;
  padding: 5px;
  padding-left: 8px;
  padding-right: 16px;
  border-radius: 5px;
  border-radius: 5px;
  font-size: 12pt;
  width: 104%;

  animation: ${fadeIn} 1s linear;
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  color: ${colours.error};

  margin: auto;
  padding: 2px;
  border: 1px solid ${colours.error};
  border-radius: 2px;
  font-size: 8pt;
  &:hover {
    background-color: ${colours.secondary};
    cursor: pointer;
  }
`;
