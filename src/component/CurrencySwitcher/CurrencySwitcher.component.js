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
        this.state = {
            open: false,
        }
    }

    _handleButtonClick = () => {
        this.setState(state => {
            return {
                open: !state.open
            };
        });
    };

    render() {
        const { availableCurrencies, updateSelectedCurrency, selectedCurrency} = this.props;
        return (
            <CurrencySwitcherWrapper>
                <CurrencySwitcherBtn
                    onClick={this._handleButtonClick}
                    isOpen={this.state.open}>
                    {selectedCurrency.symbol}
                </CurrencySwitcherBtn>
                {this.state.open && (
                    <CurrencyDropdown>
                        {availableCurrencies.map((currency, index) =>
                        (<CurrencyItem key={index}
                            onClick={() => {
                                updateSelectedCurrency(currency);
                                this._handleButtonClick()
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