import PropTypes from 'prop-types';
import React, { PureComponent } from "react";
import {
    CurrencySwitcherWrapper,
    CurrencySwitcherBtn,
    CurrencyDropdown,
    CurrencyItem
} from "./styled";

import { CurrencyItemType, CurrenciesType } from 'Type/Currency.type';

export class CurrencySwitcher extends PureComponent {

    static propTypes = {
        availableCurrencies: CurrenciesType.isRequired,
        selectedCurrency: CurrencyItemType.isRequired,
        updateSelectedCurrency: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
    
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
        const { setMenuVisible } = this.props;
        if (this.menuRef.current && this.buttonRef.current) {
          if (!this.menuRef.current.contains(event.target)
          && !this.buttonRef.current.contains(event.target)) {
            setMenuVisible(false);
          }
        }
      }

    render() {
        const { availableCurrencies,isMenuOpen, updateSelectedCurrency, selectedCurrency, setMenuVisible} = this.props;
        return (
            <CurrencySwitcherWrapper >
                <CurrencySwitcherBtn
                    ref={this.buttonRef}
                    onClick={() => {
                        setMenuVisible(!isMenuOpen);
                    }}
                    isOpen={isMenuOpen}>
                    {selectedCurrency.symbol}
                </CurrencySwitcherBtn>
                {isMenuOpen && (
                    <CurrencyDropdown ref={this.menuRef}>
                        {availableCurrencies.map((currency, index) =>
                        (<CurrencyItem key={index}
                            onClick={() => {
                                updateSelectedCurrency(currency);
                                setMenuVisible(false)
                            }}
                            data-id={index}
                        >

                            {currency.symbol} {currency.label}
                        </CurrencyItem>)
                        )}
                    </CurrencyDropdown>
                )}
            </CurrencySwitcherWrapper>
        )
    }
}

export default CurrencySwitcher