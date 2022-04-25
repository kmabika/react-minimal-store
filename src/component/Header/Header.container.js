import MainContext from "Context/MainContext";
import { PureComponent } from "react";
import Header from "./Header.component";

export class HeaderContainer extends PureComponent{

    static contextType = MainContext
    render(){
        const {selectedCurrency, setSelectedCurrency} = this.context;
        return(
            <Header/>
        )
    }
};

export default HeaderContainer;