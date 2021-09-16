import { Wrapper, DividerLine, ContactInfo } from './styles';

const Footer = (props) => {
  const { author } = props;

  return (
    <Wrapper>
      <DividerLine />
      <ContactInfo>{author}</ContactInfo>
    </Wrapper>
  );
};

export default Footer;
