import { useState, useEffect } from 'react';
import initialState from '../../data/data';
import { Display, User } from '..';
import { Wrapper } from './styles';

const Content = () => {
  const [state, setState] = useState(initialState);
  const { id, name, amount, array, sum } = state;

  const getId = () => {
    return id;
  };

  const updateId = () => {
    return id + 1;
  };

  const handleRemove = (itemId) => {
    const itemToBeRemoved = array.filter((i) => i.id === itemId);
    const newArray = array.filter((i) => i.id !== itemId);
    setState({
      ...state,
      array: newArray,
      sum: sum - itemToBeRemoved[0].amount,
    });
  };

  const setFormData = (obj) => {
    const { string, number } = obj;
    setState({
      ...state,
      amount: parseInt(number),
      name: string,
    });
  };

  const resetFormData = () => {
    setState({
      ...state,
      amount: 0,
      name: '',
    });
  };

  const handleSubmit = () => {
    let newArray = [];

    if (name.length && amount) {
      newArray = array.concat({ amount, name, id: getId() });
      console.log(newArray);
      setState({
        ...state,
        id: updateId(),
        name,
        amount,
        array: newArray,
        sum: amount + sum,
      });
    }
  };

  useEffect(() => {
    resetFormData();
  }, [sum]);

  return (
    <Wrapper>
      <User handleSubmit={handleSubmit} setFormData={setFormData} />

      <Display sum={sum} array={array} onRemove={handleRemove} />
    </Wrapper>
  );
};

export default Content;
