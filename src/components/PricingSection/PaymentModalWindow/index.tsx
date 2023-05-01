import React, { memo } from 'react';

import { PayPalButtons } from '@paypal/react-paypal-js';

import { IPaymentModalWindowProps } from '../types';
import {
    PaymentModalWindowButtons,
    PaymentModalWindowContainer,
    PaymentModalWindowContent,
} from './styles';

const PaymentModalWindow = memo(({ cost }: IPaymentModalWindowProps) => {
    return (
        <PaymentModalWindowContainer>
            <PaymentModalWindowContent>
                <PaymentModalWindowButtons>
                    <PayPalButtons
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            value: `${+cost ? cost : '0.01'}`,
                                        },
                                    },
                                ],
                            });
                        }}
                    />
                </PaymentModalWindowButtons>
            </PaymentModalWindowContent>
        </PaymentModalWindowContainer>
    );
});

export default PaymentModalWindow;
