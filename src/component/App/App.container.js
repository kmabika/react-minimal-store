import { PureComponent } from 'react';
import { MainProvider } from 'Context/MainContext';
import { GET_SELECTED_CURRENCY } from 'Query/queries';
import App from './App.component';

export class AppContainer extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            selectedCurrency: "",
        }
    };

    setSelectedCurrency = (currency) => {
        this.setState({selectedCurrency: currency})
    }

    _retrieveSelectedCurrency(){
        GET_SELECTED_CURRENCY.then(res =>  this.setState({selectedCurrency: res.data.selectedCurrency}))

    }

    render() {
        // this._retrieveSelectedCurrency();
        return (
            <MainProvider>
                <App />
            </MainProvider>
        )
    }
}

export default AppContainer;