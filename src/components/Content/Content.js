import { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiLoading } from '@mdi/js';
import { v4 as uuidv4 } from 'uuid';
import initialState from '../../data/data';
import { Display, User } from '..';
import { LoadingIcon, Wrapper } from './styles';

const Content = () => {
  const [state, setState] = useState(initialState);
  const { name, amount, array, sum, doneOnce, isDemo } = state;

  const getId = () => {
    return uuidv4();
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
        array: newArray,
        sum: amount + sum,
      });
    }
  };

  useEffect(() => {
    // reset form data on sum change to prevent spam clicking submit with the same data
    resetFormData();
  }, [sum]);

  useEffect(() => {
    // adds an example after 3 seconds and then resets the array and enables inputs
    if (!doneOnce) {
      const entry = { amount: 487, name: 'Example', id: getId() };
      setTimeout(() => {
        setState({
          ...state,
          array: array.concat(entry),
          sum: entry.amount,
          doneOnce: true,
        });
      }, 3000);

      setTimeout(() => {
        setState({
          ...state,
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
        <Icon path={mdiLoading} size={2} horizontal vertical rotate={90} spin />
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
