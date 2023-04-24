import { dictionary } from '@/types/constants';
import { ISolution } from '@/types/ISolution';

const {
    DATA_INTEGRATION,
    DATA_MANAGEMENT,
    BIG_DATA,
    DATA_WAREHOUSING,
    SELF_SERVICE_BI,
    DATA_VISUALIZATION_SERVICE,
    DATA_INTEGRATION_DESCRIPTION,
    DATA_MANAGEMENT_DESCRIPTION,
    BIG_DATA_DESCRIPTION,
    DATA_WAREHOUSING_DESCRIPTION,
    SELF_SERVICE_DESCRIPTION,
    DATA_VISUALIZATION_DESCRIPTION,
    DEFINITION_TITLE,
    DEFINITION_CONTENT,
    TYPES_TITLE,
    TYPES_TEXT,
    TYPES_LIST,
    PRACTICES_TITLE,
    PREACTICES_TEXT,
    CONCLUSION_TITLE,
    CONCLUSION_TEXT,
} = dictionary;

const solutions: ISolution[] = [
    {
        image: '',
        glassImage: './logo/data_integration_glass.png',
        title: DATA_INTEGRATION,
        description: DATA_INTEGRATION_DESCRIPTION,
        link: `solutions/${DATA_INTEGRATION}`,
        page: {
            definition: {
                id: 'definition',
                title: DEFINITION_TITLE,
                text: DEFINITION_CONTENT,
            },
            types: {
                id: 'types',
                title: TYPES_TITLE,
                image: '../images/types_of_visual.png',
                text: TYPES_TEXT,
                types: TYPES_LIST,
            },
            pracices: {
                id: 'preactices',
                title: PRACTICES_TITLE,
                image: '../images/practices.png',
                text: PREACTICES_TEXT,
            },
            conclusion: {
                id: 'conclusion',
                title: CONCLUSION_TITLE,
                text: CONCLUSION_TEXT,
            },
        },
    },
    {
        image: '',
        glassImage: './logo/data_management_glass.png',
        title: DATA_MANAGEMENT,
        description: DATA_MANAGEMENT_DESCRIPTION,
        link: `solutions/${DATA_MANAGEMENT}`,
        page: {
            definition: {
                id: 'definition',
                title: DEFINITION_TITLE,
                text: DEFINITION_CONTENT,
            },
            types: {
                id: 'types',
                title: TYPES_TITLE,
                image: '../images/types_of_visual.png',
                text: TYPES_TEXT,
                types: TYPES_LIST,
            },
            pracices: {
                id: 'preactices',
                title: PRACTICES_TITLE,
                image: '../images/practices.png',
                text: PREACTICES_TEXT,
            },
            conclusion: {
                id: 'conclusion',
                title: CONCLUSION_TITLE,
                text: CONCLUSION_TEXT,
            },
        },
    },
    {
        image: '',
        glassImage: './logo/big_data_glass.png',
        title: BIG_DATA,
        description: BIG_DATA_DESCRIPTION,
        link: `solutions/${BIG_DATA}`,
        page: {
            definition: {
                id: 'definition',
                title: DEFINITION_TITLE,
                text: DEFINITION_CONTENT,
            },
            types: {
                id: 'types',
                title: TYPES_TITLE,
                image: '../images/types_of_visual.png',
                text: TYPES_TEXT,
                types: TYPES_LIST,
            },
            pracices: {
                id: 'preactices',
                title: PRACTICES_TITLE,
                image: '../images/practices.png',
                text: PREACTICES_TEXT,
            },
            conclusion: {
                id: 'conclusion',
                title: CONCLUSION_TITLE,
                text: CONCLUSION_TEXT,
            },
        },
    },
    {
        image: '',
        glassImage: './logo/data_warehousing_glass.png',
        title: DATA_WAREHOUSING,
        description: DATA_WAREHOUSING_DESCRIPTION,
        link: `solutions/${DATA_WAREHOUSING}`,
        page: {
            definition: {
                id: 'definition',
                title: DEFINITION_TITLE,
                text: DEFINITION_CONTENT,
            },
            types: {
                id: 'types',
                title: TYPES_TITLE,
                image: '../images/types_of_visual.png',
                text: TYPES_TEXT,
                types: TYPES_LIST,
            },
            pracices: {
                id: 'preactices',
                title: PRACTICES_TITLE,
                image: '../images/practices.png',
                text: PREACTICES_TEXT,
            },
            conclusion: {
                id: 'conclusion',
                title: CONCLUSION_TITLE,
                text: CONCLUSION_TEXT,
            },
        },
    },
    {
        image: '',
        glassImage: './logo/self_service_glass.png',
        title: SELF_SERVICE_BI,
        description: SELF_SERVICE_DESCRIPTION,
        link: `solutions/${SELF_SERVICE_BI}`,
        page: {
            definition: {
                id: 'definition',
                title: DEFINITION_TITLE,
                text: DEFINITION_CONTENT,
            },
            types: {
                id: 'types',
                title: TYPES_TITLE,
                image: '../images/types_of_visual.png',
                text: TYPES_TEXT,
                types: TYPES_LIST,
            },
            pracices: {
                id: 'preactices',
                title: PRACTICES_TITLE,
                image: '../images/practices.png',
                text: PREACTICES_TEXT,
            },
            conclusion: {
                id: 'conclusion',
                title: CONCLUSION_TITLE,
                text: CONCLUSION_TEXT,
            },
        },
    },
    {
        image: '',
        glassImage: './logo/data_visualization_glass.png',
        title: DATA_VISUALIZATION_SERVICE,
        description: DATA_VISUALIZATION_DESCRIPTION,
        link: `solutions/${DATA_VISUALIZATION_SERVICE}`,
        page: {
            definition: {
                id: 'definition',
                title: DEFINITION_TITLE,
                text: DEFINITION_CONTENT,
            },
            types: {
                id: 'types',
                title: TYPES_TITLE,
                image: '../images/types_of_visual.png',
                text: TYPES_TEXT,
                types: TYPES_LIST,
            },
            pracices: {
                id: 'preactices',
                title: PRACTICES_TITLE,
                image: '../images/practices.png',
                text: PREACTICES_TEXT,
            },
            conclusion: {
                id: 'conclusion',
                title: CONCLUSION_TITLE,
                text: CONCLUSION_TEXT,
            },
        },
    },
];

export default solutions;
