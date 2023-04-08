import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { App } from './components/index';
import { theme } from './componentsLibrary';
import GlobalStyle from './globalStyles';

const Root = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <App />
                <GlobalStyle />
            </ThemeProvider>
        </>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));
