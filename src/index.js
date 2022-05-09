import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from "Style/GlobalStyle/globalStyles";
import FontStyles from 'Style/FontStyle/fontStyles';
import { ThemeProvider } from "styled-components";
import { theme } from 'Style/Theme/theme';
import App from "Component/App"

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.Fragment>
        <ThemeProvider theme={theme}>
            <FontStyles />
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </React.Fragment>
);