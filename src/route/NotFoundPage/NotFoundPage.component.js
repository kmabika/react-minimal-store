import { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, SubHeader, Wrap, Text } from './styled';

export class NotFoundPage extends PureComponent {
  render() {
    return (
      <Container>
        <Wrap>
          <Header>404</Header>
          <SubHeader>page not found !</SubHeader>
          <Text>
            Go back to the
            <Link to="/">Homepage</Link>
          </Text>
        </Wrap>
      </Container>
    );
  }
}

export default NotFoundPage;
