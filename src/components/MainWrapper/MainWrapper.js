import { Wrapper } from './styles';

function MainWrapper(props) {
  const { children } = props;
  const content = children[0];
  const footer = children[1];
  return (
    <div>
      {' '}
      <Wrapper>{content}</Wrapper>
      {footer}
    </div>
  );
}

export default MainWrapper;
