import { PureComponent } from "react";
import { CurrencySwitcher } from "./CurrencySwitcher.component";
import { GET_CURRENCIES} from 'Query/queries'
import MainContext from "Context/MainContext";

export class CurrencySwitcherContainer extends PureComponent {
    static contextType = MainContext;
    
    constructor(props) {
        super(props);
        this.state = {
            currencies:[],
        }
    };

    _retrieveCurrencies(){
        GET_CURRENCIES.then(res => this.setState({currencies:  res.data.currencies}))
    }
    
    containerProps(){
        const {selectedCurrency, setSelectedCurrency} = this.context
        this._retrieveCurrencies()
        return {
            selectedCurrency: selectedCurrency,
            setSelectedCurrency: setSelectedCurrency,
            currencies: this.state.currencies
        }
    }

    render() {
        return(
            <CurrencySwitcher {...this.containerProps()}/>
        )
    }
}

export default CurrencySwitcherContainer;