import React, { Suspense } from 'react';
import { AlertContainer } from 'alertor-library';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

import './settings/i18n';
import { App } from './components/index';
import { theme } from './componentsLibrary';
import GlobalStyle from './globalStyles';
import { envConstants } from './types/constants';

const { PAYPAL_ID } = envConstants;

const Root = () => {
    return (
        <>
            <Suspense>
                <ThemeProvider theme={theme}>
                    <PayPalScriptProvider
                        options={{
                            'client-id': PAYPAL_ID!,
                        }}
                    >
                        <App />
                        <AlertContainer />
                        <GlobalStyle />
                    </PayPalScriptProvider>
                </ThemeProvider>
            </Suspense>
        </>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));
