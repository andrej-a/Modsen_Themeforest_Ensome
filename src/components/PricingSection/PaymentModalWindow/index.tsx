import React from 'react';

import { PaymentModalWindowProps } from '@/types/componentsOptions';
import { PayPalButtons } from '@paypal/react-paypal-js';

import {
    PaymentModalWindowButtons,
    PaymentModalWindowContainer,
    PaymentModalWindowContent,
    PaymentModalWindowHeader,
} from './styles';

const PaymentModalWindow = ({ cost }: PaymentModalWindowProps) => {
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
};

export default PaymentModalWindow;
