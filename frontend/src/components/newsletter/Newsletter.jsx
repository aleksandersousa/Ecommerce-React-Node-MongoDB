import { Send } from '@material-ui/icons';
import {
  Button, Container, Desc, Input, InputContainer, Title, 
} from './Styles';

export default function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favourite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}
