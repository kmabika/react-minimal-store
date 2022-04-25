import { PureComponent } from "react";
import { 
    CurrencySwitcherWrapper,
    CurrencySwitcherBtn, 
    CurrencyDropdown,
    CurrencyItem} from "./styled";

export class CurrencySwitcher extends PureComponent {

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
        const {selectedCurrency, setSelectedCurrency} = this.props
        return (
            <CurrencySwitcherWrapper>
                <CurrencySwitcherBtn 
                 onClick={this._handleButtonClick}
                 isOpen={this.state.open}>
                    {selectedCurrency}
                </CurrencySwitcherBtn>
                {this.state.open && (
                    <CurrencyDropdown>
                        {this.props.currencies.map((currency,index) => 
                        <CurrencyItem key={index} onClick={() => {setSelectedCurrency(currency.symbol)}} data-id={index}>
                            {currency.symbol} {currency.label}
                        </CurrencyItem>)}
                    </CurrencyDropdown>
                )}
            </CurrencySwitcherWrapper>
        )
    }
}

export default CurrencySwitcher