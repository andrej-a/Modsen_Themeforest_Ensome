import { v4 as uuidv4 } from 'uuid';

import { dictionary } from '@/types/constants';

const {
    PUBLISH_DATE,
    SOFTWARE_BLOG_TITLE,
    FIRST_CONTENT_PART,
    SEPARATE_PARAGRAPH,
    SECOND_CONTENT_PART,
    SHARE,
    VIEWS,
    TAGS,
} = dictionary;

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
        image: './images/article1.png',
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
        image: './images/article2.png',
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
        image: './images/article3.png',
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
        image: './images/article4.png',
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
        image: './images/article5.png',
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `100 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Proxy', 'Data analytics'],
    },
    {
        id: uuidv4(),
        image: './images/article6.png',
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `503 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Proxy', 'Data', 'Big data'],
    },
    {
        id: uuidv4(),
        image: './images/article7.png',
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
        image: './images/article8.png',
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `303 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Proxy', 'Information security'],
    },
    {
        id: uuidv4(),
        image: './images/article9.png',
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `303 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Big Data', 'Data analytics'],
    },
    {
        id: uuidv4(),
        image: './images/article1.png',
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
        image: './images/article2.png',
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
        image: './images/article3.png',
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
        image: './images/article4.png',
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
        image: './images/article5.png',
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `100 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Proxy', 'Data analytics'],
    },
    {
        id: uuidv4(),
        image: './images/article6.png',
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `503 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Proxy', 'Data'],
    },
    {
        id: uuidv4(),
        image: './images/article7.png',
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
        image: './images/article8.png',
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `303 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Proxy', 'Information security'],
    },
    {
        id: uuidv4(),
        image: './images/article9.png',
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `303 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Big Data', 'Data analytics'],
    },
    {
        id: uuidv4(),
        image: './images/article1.png',
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
        image: './images/article2.png',
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
        image: './images/article3.png',
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
        image: './images/article4.png',
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
        image: './images/article5.png',
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `100 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Proxy', 'Data analytics'],
    },
    {
        id: uuidv4(),
        image: './images/article6.png',
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `503 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Proxy', 'Data'],
    },
    {
        id: uuidv4(),
        image: './images/article7.png',
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
        image: './images/article8.png',
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `303 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Proxy', 'Information security'],
    },
    {
        id: uuidv4(),
        image: './images/article9.png',
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `303 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Big Data', 'Data analytics'],
    },
    {
        id: uuidv4(),
        image: './images/article1.png',
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
        image: './images/article2.png',
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
        image: './images/article3.png',
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
        image: './images/article4.png',
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
        image: './images/article5.png',
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `100 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Proxy', 'Data analytics'],
    },
    {
        id: uuidv4(),
        image: './images/article6.png',
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `503 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Proxy', 'Data'],
    },
    {
        id: uuidv4(),
        image: './images/article7.png',
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
        image: './images/article8.png',
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `303 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Proxy', 'Information security'],
    },
    {
        id: uuidv4(),
        image: './images/article9.png',
        publishDate: PUBLISH_DATE,
        author: 'William Pond',
        blogTitle: SOFTWARE_BLOG_TITLE,
        firstContentPart: FIRST_CONTENT_PART,
        separateParagraph: SEPARATE_PARAGRAPH,
        secondContentPart: SECOND_CONTENT_PART,
        countOfTheViews: `303 ${VIEWS}`,
        share: SHARE,
        tagsTitle: TAGS,
        tagsArray: ['Big Data', 'Data analytics'],
    },
];

export default blogCardsData;
