import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyle from "Style/GlobalStyle/globalStyles";
import FontStyles from 'Style/FontStyle/fontStyles';
import { ThemeProvider } from "styled-components";
import { theme } from 'Style/Theme/theme';
import { ApolloProvider } from '@apollo/client'
import client from 'Query/client';
import App from "Component/App"

// let's register service-worker
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.Fragment>
        <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <FontStyles />
            <GlobalStyle />
            <App/>
        </ThemeProvider>
        </ApolloProvider>
    </React.Fragment>
);