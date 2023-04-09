import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import './settings/i18n';
import { App } from './components/index';
import { theme } from './componentsLibrary';
import GlobalStyle from './globalStyles';

const Root = () => {
    return (
        <>
            <Suspense>
                <ThemeProvider theme={theme}>
                    <App />
                    <GlobalStyle />
                </ThemeProvider>
            </Suspense>
        </>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));
