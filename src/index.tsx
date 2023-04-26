import React, { Suspense } from 'react';
import { AlertContainer } from 'alertor-library';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { PersistGate } from 'redux-persist/es/integration/react';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import './settings/i18n';
import { App } from './components/index';
import { theme } from './componentsLibrary';
import GlobalStyle from './globalStyles';
import store, { persistor } from './store';
import { envConstants } from './types/constants';

const { PAYPAL_ID } = envConstants;

const Root = () => {
    return (
        <>
            <Suspense>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <Provider store={store}>
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
                        </Provider>
                    </Router>
                </PersistGate>
            </Suspense>
        </>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));

if (window.Cypress) {
    window.store = store;
}
