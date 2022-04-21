import { createGlobalStyle } from "styled-components";
import RalewayLight from './fonts/Raleway/Raleway-Light.ttf'
import RalewayMedium from './fonts/Raleway/Raleway-Medium.ttf'
import RalewayRegular from './fonts/Raleway/Raleway-Regular.ttf'
import RalewaySemiBold from './fonts/Raleway/Raleway-SemiBold.ttf'
import RalewayBold from './fonts/Raleway/Raleway-Bold.ttf'
import RobotoRegular from './fonts/Roboto/Roboto-Regular.ttf'
import RobotoMedium from './fonts/Roboto/Roboto-Medium.ttf'
import RobotoCondensedBold from './fonts/Roboto_Condensed/RobotoCondensed-Bold.ttf'
import SourceSansProRegular from './fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf'

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Raleway';
  src: url(${RalewayLight}) format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
    font-family: 'Raleway';
    src: url(${RalewayRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Raleway';
    src: url(${RalewayMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

@font-face {
    font-family: 'Raleway';
    src: url(${RalewaySemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}
@font-face {
  font-family: 'Raleway';
  src: url(${RalewayBold}) format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Roboto */
@font-face {
  font-family: 'Roboto';
  src: url(${RobotoRegular}) format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoMedium}) format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

/* Roboto Condensed */
@font-face {
  font-family: 'Roboto Condensed';
  src: url(${RobotoCondensedBold}) format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Source Sans Pro */
@font-face {
  font-family: 'Source Sans Pro';
  src: url(${SourceSansProRegular}) format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

`;




export default FontStyles;