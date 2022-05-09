import { PureComponent } from 'react'

export class CheckMarkIcon extends PureComponent {
    render() {
        const {color} = this.props;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12l6 6L20 6"/></svg>
        )
    }
}

export default CheckMarkIcon;