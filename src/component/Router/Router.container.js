import { PureComponent } from 'react';
import Router from './Router.component';
import { PageWrapper } from './styled';

export class RouterContainer extends PureComponent {
  render() {
    return (
      <PageWrapper>
        <Router />
      </PageWrapper>
    );
  }
}

export default RouterContainer;
