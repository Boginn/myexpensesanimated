import styled from 'styled-components';
import colours from '../../data/colours';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colours.fourth};
  padding: 15px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const AddButton = styled.button`
  background-color: transparent;
  color: ${colours.success};
  margin: auto;
  margin-top: 50px;
  font-size: 28px;
  width: 100%;
  cursor: pointer;
  border: 0;
  border-radius: 10px;

  border: 1px solid ${colours.success};
  &:hover {
    background-color: ${colours.success};
    color: white;
    cursor: pointer;
  }
`;

export const ItemInput = styled.input`
  background-color: ${colours.fifth};
  height: 20px;
  &:hover {
    background-color: ${colours.fourth};
  }
`;

export const TitleText = styled.p`
  color: ${colours.primary};
  margin: auto;
  margin-bottom: 0;
  margin-top: 50px;
  text-shadow: black 1px 1px;
`;
