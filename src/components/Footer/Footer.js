import { Wrapper, DividerLine, ContactInfo } from './styles';

const Footer = (props) => {
  const { author } = props;

  return (
    <Wrapper>
      <ContactInfo>{author}</ContactInfo>
      <DividerLine />
    </Wrapper>
  );
};

export default Footer;
