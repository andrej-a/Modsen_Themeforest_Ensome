import { TService } from '@/types/componentsOptions';
import { valuesOfTheSettings } from '@/types/constants';

const {
    MACHINE_LEARNING_TITLE,
    MACHINE_LEARNING_DESCRIPTION,
    EMBED_ANALYTICS_TITLE,
    EMBED_ANALYTICS_DESCRIPTION,
    DATA_ANALYTICS_TITLE,
    DATA_ANALYTICS_DESCRIPTION,
    ACCESS_CONTROL_TITLE,
    ACCESS_CONTROL_DESCRIPTION,
    SERVICE_CUSTOMER,
    SERVICE_CHALLENGE,
    SERVICE_SOLUTION,
    SERVICE_RESULTS,
    SERVICE_TECHNOLOGIES,
    SERVICE_SOLUTIONS_LIST,
    BIG_DATA_TITLE,
    ARTIFICAL_TITLE,
} = valuesOfTheSettings;

const service: TService = [
    {
        image: './logo/machineLearning.png',
        glassImage: './logo/machineLearningGlass.png',
        title: MACHINE_LEARNING_TITLE,
        description: MACHINE_LEARNING_DESCRIPTION,
        solutionList: SERVICE_SOLUTIONS_LIST,
        content: {
            customer: SERVICE_CUSTOMER,
            challenge: SERVICE_CHALLENGE,
            solution: SERVICE_SOLUTION,
            results: SERVICE_RESULTS,
            tech: SERVICE_TECHNOLOGIES,
        },
    },
    {
        image: './logo/embdedAnalytics.png',
        glassImage: './logo/embdedAnalyticsGlass.png',
        title: EMBED_ANALYTICS_TITLE,
        description: EMBED_ANALYTICS_DESCRIPTION,
        solutionList: SERVICE_SOLUTIONS_LIST,
        content: {
            customer: SERVICE_CUSTOMER,
            challenge: SERVICE_CHALLENGE,
            solution: SERVICE_SOLUTION,
            results: SERVICE_RESULTS,
            tech: SERVICE_TECHNOLOGIES,
        },
    },
    {
        image: './logo/accessControl.png',
        glassImage: './logo/accessControlGlass.png',
        title: ACCESS_CONTROL_TITLE,
        description: ACCESS_CONTROL_DESCRIPTION,
        solutionList: SERVICE_SOLUTIONS_LIST,
        content: {
            customer: SERVICE_CUSTOMER,
            challenge: SERVICE_CHALLENGE,
            solution: SERVICE_SOLUTION,
            results: SERVICE_RESULTS,
            tech: SERVICE_TECHNOLOGIES,
        },
    },
    {
        image: './logo/dataAnalytics.png',
        glassImage: './logo/dataAnalyticsGlass.png',
        title: DATA_ANALYTICS_TITLE,
        description: DATA_ANALYTICS_DESCRIPTION,
        solutionList: SERVICE_SOLUTIONS_LIST,
        content: {
            customer: SERVICE_CUSTOMER,
            challenge: SERVICE_CHALLENGE,
            solution: SERVICE_SOLUTION,
            results: SERVICE_RESULTS,
            tech: SERVICE_TECHNOLOGIES,
        },
    },
    {
        image: './logo/bigData.png',
        glassImage: './logo/bigDataGlass.png',
        title: BIG_DATA_TITLE,
        description: DATA_ANALYTICS_DESCRIPTION,
        solutionList: SERVICE_SOLUTIONS_LIST,
        content: {
            customer: SERVICE_CUSTOMER,
            challenge: SERVICE_CHALLENGE,
            solution: SERVICE_SOLUTION,
            results: SERVICE_RESULTS,
            tech: SERVICE_TECHNOLOGIES,
        },
    },
    {
        image: './logo/artifical.png',
        glassImage: './logo/artificalGlass.png',
        title: ARTIFICAL_TITLE,
        description: DATA_ANALYTICS_DESCRIPTION,
        solutionList: SERVICE_SOLUTIONS_LIST,
        content: {
            customer: SERVICE_CUSTOMER,
            challenge: SERVICE_CHALLENGE,
            solution: SERVICE_SOLUTION,
            results: SERVICE_RESULTS,
            tech: SERVICE_TECHNOLOGIES,
        },
    },
];

export default service;
