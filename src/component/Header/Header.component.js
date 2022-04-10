import { PureComponent } from 'react'
import {
    Cart,
    TopRightNavBarWrap,
    HeaderContainer,
    TopMiddleNavBarWrap,
    TopLeftNavBarWrap,
    HeaderWrap,
} from "./styled";

import Category from 'Component/Category';
import Logo  from 'Component/Logo'
import CurrencySwitcher from 'Component/CurrencySwitcher';
import CartIcon from 'Component/CartIcon';

export class Header extends PureComponent {
    render() {
        return (
            <HeaderContainer>
                <HeaderWrap>
                    <TopLeftNavBarWrap>
                        <Category/>
                    </TopLeftNavBarWrap>
                    <TopMiddleNavBarWrap>
                        <Logo/>
                    </TopMiddleNavBarWrap>
                    <TopRightNavBarWrap>
                        <CurrencySwitcher/>
                        <Cart aria-label="Open your cart menu">
                            <CartIcon/>
                        </Cart>
                    </TopRightNavBarWrap>
                </HeaderWrap>
            </HeaderContainer>
        )
    }
}

export default Header