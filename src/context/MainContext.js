import React,{ PureComponent } from "react";
import {gql} from '@apollo/client'
import { cache } from "Query/cache";
import client from 'Query/client'
import { GET_SELECTED_CURRENCY } from "Query/queries";

const MainContext = React.createContext()

class MainProvider extends PureComponent{

    state = {
        selectedCurrency: "$",
    }

    componentDidMount(){
        this._retrieveSelectedCurrency()
    }

    _retrieveSelectedCurrency(){
        const { selectedCurrency } = client.readQuery({
            query: GET_SELECTED_CURRENCY,
        })
        this.setState({selectedCurrency: selectedCurrency})
    }

    setSelectedCurrency = (currency) => {
        this.setState({selectedCurrency: currency})
        cache.writeQuery({
            query: gql`
                query SelectedCurrencies{
                    selectedCurrency @client
                }
            `,
            data: {
                selectedCurrency: currency
            }
        })
    }

    render(){
        const {children } = this.props
        const {selectedCurrency} = this.state
        const {setSelectedCurrency} = this
        return(
            <MainContext.Provider value={{selectedCurrency,setSelectedCurrency}}>
                {children}
            </MainContext.Provider>
        )
    }
};

export default MainContext;

export {MainProvider}