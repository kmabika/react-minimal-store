import { PureComponent } from "react";
import { HeaderLogo } from "./styled";

export class Logo extends PureComponent {
    render() {
        return (
            <HeaderLogo>
                <a href="/">
                    <img src={"/images/a-logo.svg"} alt="shop logo" />
                </a>
            </HeaderLogo>
        )
    }
}

export default Logo;