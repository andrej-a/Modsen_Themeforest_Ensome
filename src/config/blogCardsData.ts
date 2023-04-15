import { v4 as uuidv4 } from 'uuid';

import Article1 from '@/assets/images/pictures/article1.png';
import Article2 from '@/assets/images/pictures/article2.png';
import Article3 from '@/assets/images/pictures/article3.png';
import Article4 from '@/assets/images/pictures/article4.png';
import Article5 from '@/assets/images/pictures/article5.png';
import Article6 from '@/assets/images/pictures/article6.png';
import Article7 from '@/assets/images/pictures/article7.png';
import Article8 from '@/assets/images/pictures/article8.png';
import Article9 from '@/assets/images/pictures/article9.png';
import { valuesOfTheSettings } from '@/types/constants';

const {
    PUBLISH_DATE,
    SOFTWARE_BLOG_TITLE,
    FIRST_CONTENT_PART,
    SEPARATE_PARAGRAPH,
    SECOND_CONTENT_PART,
    SHARE,
    VIEWS,
    TAGS,
} = valuesOfTheSettings;

export interface IBlogCard {
    id: string;
    image: string;
    publishDate: string;
    author: string;
    blogTitle: string;
    firstContentPart: string;
    separateParagraph: string;
    secondContentPart: string;
    countOfTheViews: string;
    share: string;
    tagsTitle: string;
    tagsArray: string[];
}

export type TBlogCards = IBlogCard[];

const blogCardsData: TBlogCards = [
    {
        id: uuidv4(),
        image: Article1,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `421 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Data', 'Future'],
    },
    {
        id: uuidv4(),
        image: Article2,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `308 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['App', 'Information security'],
    },
    {
        id: uuidv4(),
        image: Article3,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `401 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['CIO', 'Team', 'Managment'],
    },
    {
        id: uuidv4(),
        image: Article4,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `403 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Future', 'Media', 'App'],
    },
    {
        id: uuidv4(),
        image: Article5,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `100 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Proxy', 'Data', 'Data analytics'],
    },
    {
        id: uuidv4(),
        image: Article6,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `503 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Proxy', 'Data', 'Data analytics'],
    },
    {
        id: uuidv4(),
        image: Article7,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `404 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Startup', 'CMR', 'Big Data'],
    },
    {
        id: uuidv4(),
        image: Article8,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `303 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: [
            'Proxy',
            'Information security',
            'Big Data',
            'Data analytics',
        ],
    },
    {
        id: uuidv4(),
        image: Article9,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `303 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: [
            'Proxy',
            'Information security',
            'Big Data',
            'Data analytics',
        ],
    },
    {
        id: uuidv4(),
        image: Article1,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `421 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Data', 'Future'],
    },
    {
        id: uuidv4(),
        image: Article2,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `308 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['App', 'Information security'],
    },
    {
        id: uuidv4(),
        image: Article3,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `401 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['CIO', 'Team', 'Managment'],
    },
    {
        id: uuidv4(),
        image: Article4,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `403 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Future', 'Media', 'App'],
    },
    {
        id: uuidv4(),
        image: Article5,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `100 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Proxy', 'Data', 'Data analytics'],
    },
    {
        id: uuidv4(),
        image: Article6,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `503 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Proxy', 'Data', 'Data analytics'],
    },
    {
        id: uuidv4(),
        image: Article7,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `404 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Startup', 'CMR', 'Big Data'],
    },
    {
        id: uuidv4(),
        image: Article8,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `303 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: [
            'Proxy',
            'Information security',
            'Big Data',
            'Data analytics',
        ],
    },
    {
        id: uuidv4(),
        image: Article9,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `303 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: [
            'Proxy',
            'Information security',
            'Big Data',
            'Data analytics',
        ],
    },
    {
        id: uuidv4(),
        image: Article1,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `421 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Data', 'Future'],
    },
    {
        id: uuidv4(),
        image: Article2,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `308 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['App', 'Information security'],
    },
    {
        id: uuidv4(),
        image: Article3,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `401 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['CIO', 'Team', 'Managment'],
    },
    {
        id: uuidv4(),
        image: Article4,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `403 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Future', 'Media', 'App'],
    },
    {
        id: uuidv4(),
        image: Article5,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `100 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Proxy', 'Data', 'Data analytics'],
    },
    {
        id: uuidv4(),
        image: Article6,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `503 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Proxy', 'Data', 'Data analytics'],
    },
    {
        id: uuidv4(),
        image: Article7,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `404 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Startup', 'CMR', 'Big Data'],
    },
    {
        id: uuidv4(),
        image: Article8,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `303 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: [
            'Proxy',
            'Information security',
            'Big Data',
            'Data analytics',
        ],
    },
    {
        id: uuidv4(),
        image: Article9,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `303 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: [
            'Proxy',
            'Information security',
            'Big Data',
            'Data analytics',
        ],
    },
    {
        id: uuidv4(),
        image: Article1,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `421 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Data', 'Future'],
    },
    {
        id: uuidv4(),
        image: Article2,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `308 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['App', 'Information security'],
    },
    {
        id: uuidv4(),
        image: Article3,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `401 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['CIO', 'Team', 'Managment'],
    },
    {
        id: uuidv4(),
        image: Article4,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `403 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Future', 'Media', 'App'],
    },
    {
        id: uuidv4(),
        image: Article5,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `100 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Proxy', 'Data', 'Data analytics'],
    },
    {
        id: uuidv4(),
        image: Article6,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `503 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Proxy', 'Data', 'Data analytics'],
    },
    {
        id: uuidv4(),
        image: Article7,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `404 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Startup', 'CMR', 'Big Data'],
    },
    {
        id: uuidv4(),
        image: Article8,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `303 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: [
            'Proxy',
            'Information security',
            'Big Data',
            'Data analytics',
        ],
    },
    {
        id: uuidv4(),
        image: Article9,
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `303 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: [
            'Proxy',
            'Information security',
            'Big Data',
            'Data analytics',
        ],
    },
];

export default blogCardsData;
