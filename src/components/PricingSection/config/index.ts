import { dictionary } from '@/types/constants';

const {
    FREE_TRIAL,
    LITE,
    FOR_ENTERPRISES,
    BASIC,
    FOR_SMALL_TEAMS,
    COMUNITY_SUPPORT,
    FOR_MIDDLE_TEAMS,
    INDIVIDUAL_SUPPORT,
    INDIVIDUAL_DATA,
    FOR_BIG_TEAMS,
    INDIVIDUAL_DATA120,
    ADVANCED_PERMISSIONS,
    UNLIMITED_TEAMS,
    UNLIMITED_DATA,
    DATA_HISTORY,
    AUDIT_LOG,
    ALL_FUNCTIONS,
} = dictionary;

const dataOfThePrices = [
    {
        kindOfThePlan: FREE_TRIAL,
        cost: '00',
        listOfServices: [FOR_SMALL_TEAMS, COMUNITY_SUPPORT],
    },
    {
        kindOfThePlan: LITE,
        cost: '99',
        listOfServices: [FOR_MIDDLE_TEAMS, INDIVIDUAL_SUPPORT, INDIVIDUAL_DATA],
    },
    {
        kindOfThePlan: FOR_ENTERPRISES,
        cost: '120',
        listOfServices: [
            FOR_BIG_TEAMS,
            INDIVIDUAL_SUPPORT,
            INDIVIDUAL_DATA120,
            ADVANCED_PERMISSIONS,
        ],
    },
    {
        kindOfThePlan: BASIC,
        cost: '150',
        listOfServices: [
            UNLIMITED_TEAMS,
            INDIVIDUAL_SUPPORT,
            UNLIMITED_DATA,
            ADVANCED_PERMISSIONS,
            DATA_HISTORY,
            AUDIT_LOG,
            ALL_FUNCTIONS,
        ],
    },
];

export default dataOfThePrices;
