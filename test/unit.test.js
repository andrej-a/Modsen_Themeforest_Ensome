import EmailIcon from '@/assets/images/logo/email.png';
import Address from '@/assets/images/logo/address.png';

import blogCardsData from '@/config/blogCardsData';
import { getSummAroundYear } from '@/utils/getSummAroundYear';
import getRelatedPosts from '@/utils/getRelatedPosts';
import filterByTagAndSortByPopular from '@/utils/filterByTagAndSortByPopular';
import { mockDataObject } from './mock';
import { cutString, decodeString, getIcon } from '@/utils/cutString';

const {
    mockStringWithTags,
    stringToDecode,
    correctResultForFilteredByTagFirstScenario,
    correctResultForFilteredByTagSecondScenario,
    correctResultOfRelatedPostsFirstScenario,
    correctResultOfRelatedPostsScenarioScenario,
} = mockDataObject;

describe('functions for string data types are working correct', () => {
    it('cut string function', () => {
        const correcResult =
            'Customer  Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis ultricies. Integer ante sapien, consequat et dolor v...';
        expect(cutString(mockStringWithTags)).toEqual(correcResult);
    });
    it('decodeString function', () => {
        const correctString =
            '2022 software development trends explained with benefits';
        expect(decodeString(stringToDecode)).toEqual(correctString);
    });
    it('get Email icon according to the type', () => {
        const type = 'Email';
        expect(getIcon(type)).toEqual(EmailIcon);
    });
    it('get Address icon according to the type', () => {
        const type = 'Address';
        expect(getIcon(type)).toEqual(Address);
    });
});

describe('check if function for filtered by tag and sort by popular correct work', () => {
    const dataWithStaticID = blogCardsData.map((data, index) => {
        return { ...data, id: index };
    });

    it('filter by tag and sort by popular correct works, first scenario', () => {
        expect(filterByTagAndSortByPopular(dataWithStaticID, ['App'])).toEqual(
            correctResultForFilteredByTagFirstScenario,
        );
    });
    it('filter by tag and sort by popular correct works, second scenario', () => {
        expect(
            filterByTagAndSortByPopular(dataWithStaticID, [
                'CIO',
                'Data analytics',
            ]),
        ).toEqual(correctResultForFilteredByTagSecondScenario);
    });
    it('function correct works if no one tag was not pass to parameters', () => {
        expect(filterByTagAndSortByPopular(dataWithStaticID, [])).toEqual([]);
    });
    it('check uncorrect way', () => {
        expect(
            filterByTagAndSortByPopular(dataWithStaticID, ['Big data']),
        ).not.toEqual([]);
    });
});

describe('function for getting related posts correct works', () => {
    const dataWithStaticID = blogCardsData.map((data, index) => {
        return { ...data, id: index };
    });
    it('get correct related posts according to tags array, first scenario', () => {
        expect(getRelatedPosts(dataWithStaticID, ['Proxy'])).toEqual(
            correctResultOfRelatedPostsFirstScenario,
        );
    });
    it('get correct related posts according to tags array, second scenario', () => {
        expect(
            getRelatedPosts(dataWithStaticID, ['Data analytics', 'App']),
        ).toEqual(correctResultOfRelatedPostsScenarioScenario);
    });
    it('get correct related posts if no one tags was passed to parameters', () => {
        expect(getRelatedPosts(dataWithStaticID, [])).toEqual([]);
    });
});

describe('get the cost of goods for the year', () => {
    it('first scenario', () => {
        expect(getSummAroundYear(120)).toBe(1440);
    });
    it('second scenario', () => {
        expect(getSummAroundYear(99)).toBe(1188);
    });
});
