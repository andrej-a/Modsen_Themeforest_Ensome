import { PaymentCardProps } from '..';

export interface IPaymentModalWindowProps {
    cost: string;
}

export default interface IPricingCardProps {
    kindOfThePlan: string;
    cost: string;
    listOfServices: string[];
    onHandlePlan: (plan: PaymentCardProps) => () => void;
    isPaymentCard: boolean;
}
