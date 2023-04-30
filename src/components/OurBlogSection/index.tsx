import React from 'react';
import { useTranslation } from 'react-i18next';

import { SliderComponent } from '@/components';
import { BlogCard } from '@/componentsLibrary';
import blogCardsData from '@/config/blogCardsData';
import useSliderCards from '@/hooks/useSlider';
import { dictionary } from '@/types/constants';

import OurBlogMobile from './OurBlogMobile';
import { OurBlogContainer } from './styles';

const { OUR_BLOG } = dictionary;
const OurBlogSection = () => {
    const { t } = useTranslation();
    const { sliderCards } = useSliderCards();
    return (
        <>
            <OurBlogContainer>
                <SliderComponent
                    description=""
                    settings={{
                        isButtonsControls: true,
                        isDescription: false,
                        contentPosition: 'space-between',
                    }}
                    innerControls={{
                        isInclude: false,
                        cardsSize: 275,
                        innerGap: 28,
                        innerPadding: 44,
                        innerTransform: 300,
                    }}
                    countOfTheCards={sliderCards!}
                    title={t(OUR_BLOG)}
                >
                    {blogCardsData.map((data, index) => {
                        return (
                            <BlogCard
                                key={index}
                                settings={{ type: 'small' }}
                                content={data}
                            />
                        );
                    })}
                </SliderComponent>
            </OurBlogContainer>
            <OurBlogMobile />
        </>
    );
};

export default OurBlogSection;
