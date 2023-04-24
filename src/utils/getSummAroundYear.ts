import { numberEnums } from '@/types/constants';

const { MONTH_ON_THE_YEAR } = numberEnums;
export const getSummAroundYear = (cost: string) => {
    return parseInt(cost, 10) ? parseInt(cost, 10) * MONTH_ON_THE_YEAR : cost;
};
