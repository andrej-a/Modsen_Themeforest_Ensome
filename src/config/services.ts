import accessControl from '@/assets/images/logo/accessControl.png';
import dataAnalytics from '@/assets/images/logo/dataAnalytics.png';
import embdedAnalytics from '@/assets/images/logo/embdedAnalytics.png';
import machineLearning from '@/assets/images/logo/machineLearning.png';
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
} = valuesOfTheSettings;

const benefitsInformation = [
    {
        image: machineLearning,
        title: MACHINE_LEARNING_TITLE,
        description: MACHINE_LEARNING_DESCRIPTION,
    },
    {
        image: embdedAnalytics,
        title: EMBED_ANALYTICS_TITLE,
        description: EMBED_ANALYTICS_DESCRIPTION,
    },
    {
        image: accessControl,
        title: ACCESS_CONTROL_TITLE,
        description: ACCESS_CONTROL_DESCRIPTION,
    },
    {
        image: dataAnalytics,
        title: DATA_ANALYTICS_TITLE,
        description: DATA_ANALYTICS_DESCRIPTION,
    },
];

export default benefitsInformation;
