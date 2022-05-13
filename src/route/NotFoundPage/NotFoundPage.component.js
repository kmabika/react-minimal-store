import { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Container, Header, SubHeader, Wrap, Text} from "./styled";

export class NotFoundPage extends PureComponent {

    render(){
        return(
            <Container>
                <Wrap>
                    <Header>404</Header>
                    <SubHeader>page not found !</SubHeader>
                    <Text>
                        Go back to the 
                        <Link href="/">Homepage</Link>
                    </Text>
                    <Text>(Redirects to homepage after 10 seconds)</Text>
                </Wrap>
            </Container>
        )
    };
};

export default NotFoundPage;