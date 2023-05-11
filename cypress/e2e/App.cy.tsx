import links from '@/config/links';
import testimonialsData from '@/config/testimonials';
import blogCardsData from '@/config/blogCardsData';
import filterByTagAndSortByPopular from '@/utils/filterByTagAndSortByPopular';
import team from '@/config/team';
import service from '@/config/services';
import mockDataObject from './helpers';
import '../support';

const { mockPopularPosts } = mockDataObject;
const dataWithStaticID = blogCardsData.map((data, index) => {
    return { ...data, id: index.toString() };
});
describe('Walk around pages', () => {
    links.forEach(data => {
        it(`visit ${data.title}`, () => {
            cy.visit(`http://localhost:3030${data.link}`);
        });
    });
});

describe('Home page functional', () => {
    it('open modal window', () => {
        cy.visit(`http://localhost:3030/`);
        cy.get(`[data-test="watchVideo"]`).click();
        cy.get(`[data-test="modal"]`).should('be.visible');
        cy.get(`[data-test="modal"]`).click();
        cy.get(`[data-test="modal"]`).should('not.exist');
    });
    it('testimonials slider', () => {
        for (let i = 0; i < testimonialsData.length / 3 - 1; i++) {
            cy.get(`[data-test="moveLeftButton"]`).first().click();
        }
        cy.get(`[data-test="moveLeftButton"]`).first().should('be.disabled');
    });
    it('paypal functional', () => {
        for (let i = 0; i < 4; i++) {
            cy.get(`[data-test="paypal button"]`).eq(i).click();
            cy.get(`[data-test="modal"]`).should('be.visible');
            cy.get(`[data-test="modal"]`).click();
        }
    });
    it('our blog slider', () => {
        for (let i = 0; i < blogCardsData.length / 3 - 1; i++) {
            cy.get(`[data-test="moveLeftButton"]`).eq(1).click();
        }
        cy.get(`[data-test="moveLeftButton"]`).eq(1).should('be.disabled');
    });
    it('change language functional', () => {
        cy.get(`[data-test="SwitchToRussian"]`).click();
        cy.get(`[data-test="SwitchToRussian"]`).should('have.text', 'Русский');
        cy.get(`[data-test="SwitchToEnglish"]`).should(
            'have.text',
            'Английский',
        );
        cy.get(`[data-test="SwitchToEnglish"]`).click();
        cy.get(`[data-test="SwitchToEnglish"]`).should('have.text', 'English');
    });
});

describe('Solutions page', () => {
    it('visit Solution page', () => {
        cy.visit(`http://localhost:3030/solutions`);
        cy.get(`[data-test="readMore"]`).eq(0).click();
        cy.get(`[data-test="lightBluePageTitle"]`).should(
            'have.text',
            'Data integration',
        );
    });
    it('check archor links', () => {
        cy.scrollTo(0, 1500);
        cy.get(`[data-test="archorLinks"]`).should('be.visible');
        cy.get(`[data-test="archorLinks"]`)
            .contains('Data visualization practices')
            .click();
        cy.get(`[data-test="archorLinks"]`)
            .contains('Types of data visualizations')
            .click();
    });
});

describe('Blog and single blog pages', () => {
    before(() => {
        cy.window().then(win => {
            win.localStorage.clear();
        });
    });
    it('visit Solution page', () => {
        cy.visit(`http://localhost:3030/blog`);
    });
    it('check pagination', () => {
        cy.scrollTo('bottom');
        cy.get(`[data-test="blogCard"]`).should('have.length', 9);
        cy.get(`[data-test="loadMoreArticles"]`).click();
        cy.get(`[data-test="blogCard"]`).should('have.length', 18);
        cy.get(`[data-test="loadMoreArticles"]`).click();
        cy.get(`[data-test="blogCard"]`).should('have.length', 27);
        cy.get(`[data-test="loadMoreArticles"]`).click();
        cy.get(`[data-test="blogCard"]`).should('have.length', 36);
    });
    it('check store and popular posts', () => {
        cy.get(`[data-test="readMore"]`).eq(0).click();
        cy.get(`[data-test="lightBluePageTitle"]`).should(
            'have.text',
            '2022 software development trends explained with benefits',
        );
        cy.window()
            .its('store')
            .invoke('getState')
            .its('blogSlice')
            .its('tagsOfCurrentBlog')
            .then(currentTags => {
                expect(
                    filterByTagAndSortByPopular(
                        dataWithStaticID,
                        currentTags,
                    )[0].id,
                ).to.equal(mockPopularPosts[0].id);
            });
    });
    it('check accordeon component', () => {
        for (let i = 0; i < 5; i++) {
            cy.get(`[data-test="categoryTrigger"]`).eq(i).click();
            cy.get(`[data-test="categoryDescription"]`).should('be.visible');
            cy.get(`[data-test="categoryTrigger"]`).eq(i).click();
            cy.get(`[data-test="categoryDescription"]`).should(
                'not.be.visible',
            );
        }
    });
    it('try to submit without any value', () => {
        cy.get(`[data-test="searchBloByTag"]`).focus().clear();
        cy.get(`[data-test="submitBlogSearching"]`).should('not.be.disabled');
        cy.get(`[data-test="submitBlogSearching"]`).click();
        cy.get(`[data-test="submitBlogSearching"]`).should('be.disabled');
        cy.get(`[data-test="tagValidationError"]`).should('exist');
    });
    it('type value and submit', () => {
        cy.get(`[data-test="searchBloByTag"]`).focus().clear();
        cy.get(`[data-test="searchBloByTag"]`).type('Big data');
        cy.get(`[data-test="searchBloByTag"]`).focus();
        cy.get(`[data-test="elastickItem"]`).should('have.length', 1);
        cy.get(`[data-test="searchBloByTag"]`).should('have.value', 'Big data');
        cy.get(`[data-test="submitBlogSearching"]`).click();
        cy.window()
            .its('store')
            .invoke('getState')
            .its('blogSlice')
            .its('tagsOfCurrentBlog')
            .then(currentTags => {
                expect(
                    filterByTagAndSortByPopular(
                        dataWithStaticID,
                        currentTags,
                    )[0].id,
                ).to.equal(mockPopularPosts[0].id);
            });
    });
});

describe('our team page', () => {
    it('visit page', () => {
        cy.visit(`http://localhost:3030/our team`);
    });
    it('check infinity scroll', () => {
        cy.get(`[data-test="personCard"]`).should('have.length', 9);
        cy.scrollTo('bottom');
        cy.get(`[data-test="personCard"]`).should('have.length', 18);
        cy.scrollTo('bottom');
        cy.get(`[data-test="personCard"]`).should('have.length', 27);
        cy.scrollTo('bottom');
        cy.get(`[data-test="personCard"]`).should('have.length', 36);
        cy.scrollTo('bottom');
        cy.get(`[data-test="personCard"]`).should('have.length', 36);
    });
    it('go to personal person page', () => {
        cy.scrollTo('top');
        cy.get(`[data-test="personCard"]`).eq(0).click();
        cy.get(`[data-test="lightBluePageTitle"]`).should(
            'have.text',
            team[0].name,
        );
    });
});

describe('check service page', () => {
    before(() => {
        cy.window().then(win => {
            win.localStorage.clear();
        });
    });
    it('visit page', () => {
        cy.visit(`http://localhost:3030/services`);
    });
    it('check cards', () => {
        cy.get(`[data-test="serviceCard"]`).should(
            'have.length',
            service.length,
        );
        cy.get(`[data-test="readMore"]`).eq(0).click();
        cy.get(`[data-test="darkPageTitle"]`).should(
            'have.text',
            'Machine learning',
        );
    });
    it('check correct search form', () => {
        cy.get(`[data-test="searchBloByTag"]`).focus().clear();
        cy.get(`[data-test="searchBloByTag"]`).type('Embed analytics');
        cy.get(`[data-test="searchBloByTag"]`).focus();
        cy.get(`[data-test="elastickItem"]`).should('have.length', 1);
        cy.get(`[data-test="searchBloByTag"]`).should(
            'have.value',
            'Embed analytics',
        );
        cy.get(`[data-test="submitBlogSearching"]`).click();
    });
});
