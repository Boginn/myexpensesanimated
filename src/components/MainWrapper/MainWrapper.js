import { Wrapper } from './styles';

function MainWrapper(props) {
  const { children } = props;
  console.log(children);
  return (
    <div>
      {' '}
      <Wrapper>{children[0]}</Wrapper>
      {children[1]}
    </div>
  );
}

export default MainWrapper;
