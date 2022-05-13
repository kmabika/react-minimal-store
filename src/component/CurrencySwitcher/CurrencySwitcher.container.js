import PropTypes from 'prop-types';
import { PureComponent } from "react";
import { CurrencySwitcher } from "./CurrencySwitcher.component";
import { connect } from 'react-redux'
import { CurrencyDispatcher } from "Store/Currency/Currency.dispatcher";
import { CurrenciesType, CurrencyItemType } from 'Type/Currency.type';

export const mapStateToProps = (state) => ({
    selectedCurrency: state.CurrencyReducer.selectedCurrency,
    availableCurrencies: state.CurrencyReducer.currencies,
  });

export const mapDispatchToProps = (dispatch) => ({
    updateSelectedCurrency: (currency) => CurrencyDispatcher.updateSelectedCurrency(dispatch, currency),
});

export class CurrencySwitcherContainer extends PureComponent {

    static propTypes = {
        selectedCurrency: CurrencyItemType.isRequired,
        availableCurrencies: CurrenciesType.isRequired,
        updateSelectedCurrency: PropTypes.func.isRequired,
    };

    constructor(props){
        super(props);
        this.state = {isMenuOpen: false};
        this.setMenuVisible = this.setMenuVisible.bind(this);
    };

    setMenuVisible(state){
        this.setState({isMenuOpen: state});
    }

    containerProps() {
        const { selectedCurrency, availableCurrencies, updateSelectedCurrency } = this.props;
        const {isMenuOpen} = this.state;
        return {
            availableCurrencies,
            isMenuOpen,
            setMenuVisible: this.setMenuVisible,
            selectedCurrency,
            updateSelectedCurrency
        }
    }

    render() {
        return (
            <CurrencySwitcher {...this.containerProps()} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcherContainer);