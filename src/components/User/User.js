import { useRef } from 'react';
import { AddButton, Wrapper, ItemInput, TitleText } from './styles';

function User(props) {
  const inputName = useRef(null);
  const inputNumber = useRef(null);
  const { handleSubmit, setFormData } = props;

  const resetForm = () => {
    inputName.current.value = null;
    inputNumber.current.value = null;
  };

  const handleAdd = () => {
    handleSubmit();
    resetForm();
  };

  const handleChange = () => {
    setFormData({
      string: inputName.current.value,
      number: inputNumber.current.value,
    });
  };

  return (
    <Wrapper>
      <TitleText>Item</TitleText>
      <ItemInput type="text" ref={inputName} onChange={handleChange} />
      <TitleText>Price</TitleText>
      <ItemInput type="number" ref={inputNumber} onChange={handleChange} />
      <div>
        <AddButton type="button" onClick={() => handleAdd()}>
          &#43;
        </AddButton>
      </div>
    </Wrapper>
  );
}

export default User;
