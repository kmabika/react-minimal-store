import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import {
  CurrencySwitcherWrapper,
  CurrencySwitcherBtn,
  CurrencyDropdown,
  CurrencyItem,
} from './styled';

import { CurrencyItemType, CurrenciesType } from 'Type/Currency.type';

export class CurrencySwitcher extends PureComponent {
  static propTypes = {
    availableCurrencies: CurrenciesType.isRequired,
    selectedCurrency: CurrencyItemType.isRequired,
    updateSelectedCurrency: PropTypes.func.isRequired,
    isMenuOpen: PropTypes.bool.isRequired,
    buttonRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
    toggleMenu: PropTypes.func.isRequired,
    menuRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
  };

  render() {
    const {
      availableCurrencies,
      isMenuOpen,
      updateSelectedCurrency,
      selectedCurrency,
      buttonRef,
      menuRef,
      toggleMenu,
    } = this.props;
    return (
      <CurrencySwitcherWrapper>
        <CurrencySwitcherBtn
          ref={buttonRef}
          onClick={() => {
            toggleMenu(!isMenuOpen);
          }}
          aria-label="change currency"
          isOpen={isMenuOpen}>
          {selectedCurrency.symbol}
        </CurrencySwitcherBtn>
        {isMenuOpen && (
          <CurrencyDropdown ref={menuRef}>
            {availableCurrencies &&
              availableCurrencies?.map((currency, index) => (
                <CurrencyItem
                  key={index}
                  onClick={() => {
                    updateSelectedCurrency(currency);
                    toggleMenu(false);
                  }}
                  data-id={index}>
                  {currency.symbol} {currency.label}
                </CurrencyItem>
              ))}
          </CurrencyDropdown>
        )}
      </CurrencySwitcherWrapper>
    );
  }
}

export default CurrencySwitcher;
