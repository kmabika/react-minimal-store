import { PureComponent } from "react";
import { CurrencySwitcherWrap } from "./styled";

export class CurrencySwitcher extends PureComponent {
    render() {
        return (
            <CurrencySwitcherWrap>
                <img src={"/images/currency.svg"} alt="cart" />
            </CurrencySwitcherWrap>
        )
    }
}

export default CurrencySwitcher