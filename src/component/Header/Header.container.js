import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import Header from './Header.component';
import { connect } from 'react-redux';
import { QueryDispatcher } from 'Util/QueryDispatcher/QueryDispatcher/';

export const mapDispatchToProps = (dispatch) => ({
  handleFetchInitData: () => QueryDispatcher.handleFetchInitData(dispatch),
});

export class HeaderContainer extends PureComponent {
  static propTypes = {
    handleFetchInitData: PropTypes.func.isRequired,
  };
  async componentDidMount() {
    const { handleFetchInitData } = this.props;
    await handleFetchInitData();
  }
  render() {
    return <Header />;
  }
}

export default connect(null, mapDispatchToProps)(HeaderContainer);
