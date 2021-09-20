import { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiLoading } from '@mdi/js';
import initialState from '../../data/data';
import { Display, User } from '..';
import { LoadingIcon, Wrapper } from './styles';

const Content = () => {
  const [state, setState] = useState(initialState);
  const { id, name, amount, array, sum, doneOnce, isDemo } = state;

  const getId = () => {
    return id;
  };

  const updateId = () => {
    return id + 1;
  };

  const handleRemove = (itemId) => {
    const itemToBeRemoved = array.filter((i) => i.id === itemId)[0];
    const newArray = array.filter((i) => i.id !== itemId);
    setState({
      ...state,
      array: newArray,
      sum: sum - itemToBeRemoved.amount,
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
      setState({
        ...state,
        id: updateId(),

        array: newArray,
        sum: amount + sum,
      });
    }
  };

  useEffect(() => {
    resetFormData();
  }, [sum]);

  useEffect(() => {
    // adds an example after 3 seconds and then deletes it later
    if (!doneOnce) {
      const entry = { amount: 487, name: 'Example', id: getId() };
      setTimeout(() => {
        setState({
          ...state,
          id: updateId(),
          name,
          amount,
          array: array.concat(entry),
          sum: entry.amount,
          doneOnce: true,
        });
      }, 3000);

      setTimeout(() => {
        setState({
          ...state,
          id: updateId(),
          name,
          amount,
          array: [],
          sum: amount + sum,
          doneOnce: true,
          isDemo: false,
        });
      }, 7000);
    }
  });

  return (
    <Wrapper>
      <LoadingIcon>
        <Icon path={mdiLoading} size={1} horizontal vertical rotate={90} spin />
      </LoadingIcon>
      <User
        handleSubmit={handleSubmit}
        setFormData={setFormData}
        isDemo={isDemo}
      />
      <Display sum={sum} array={array} onRemove={handleRemove} />
    </Wrapper>
  );
};

export default Content;
