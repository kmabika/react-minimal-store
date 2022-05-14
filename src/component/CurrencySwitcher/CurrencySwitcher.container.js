import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { CurrencySwitcher } from './CurrencySwitcher.component';
import { connect } from 'react-redux';
import { CurrencyDispatcher } from 'Store/Currency/Currency.dispatcher';
import { CurrenciesType, CurrencyItemType } from 'Type/Currency.type';

export const mapStateToProps = (state) => ({
  selectedCurrency: state.CurrencyReducer.selectedCurrency,
  availableCurrencies: state.CurrencyReducer.currencies,
});

export const mapDispatchToProps = (dispatch) => ({
  updateSelectedCurrency: (currency) =>
    CurrencyDispatcher.updateSelectedCurrency(dispatch, currency),
});

export class CurrencySwitcherContainer extends PureComponent {
  static propTypes = {
    selectedCurrency: CurrencyItemType.isRequired,
    availableCurrencies: CurrenciesType.isRequired,
    updateSelectedCurrency: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { isMenuOpen: false };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.menuRef = React.createRef();
    this.buttonRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.menuRef.current && this.buttonRef.current) {
      if (
        !this.menuRef.current.contains(event.target) &&
        !this.buttonRef.current.contains(event.target)
      ) {
        this.toggleMenu(false);
      }
    }
  }

  toggleMenu(state) {
    this.setState({ isMenuOpen: state });
  }

  containerProps() {
    const { selectedCurrency, availableCurrencies, updateSelectedCurrency } =
      this.props;
    const { isMenuOpen } = this.state;
    return {
      availableCurrencies,
      isMenuOpen,
      toggleMenu: this.toggleMenu,
      selectedCurrency,
      buttonRef: this.buttonRef,
      menuRef: this.menuRef,
      updateSelectedCurrency,
    };
  }

  render() {
    return <CurrencySwitcher {...this.containerProps()} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencySwitcherContainer);
