import React, { memo, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import AccordionArrow from '@/assets/images/logo/accordion_arrow.png';
import { ImageComponent } from '@/components';

import { ICategoryItemProps } from '../../types';
import { AccordeonDescription, AccordionTrigger } from './styles';

const CategoryItem = memo(({ theme, description }: ICategoryItemProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [height, setHeight] = useState('0');
    const { t } = useTranslation();
    const ref = useRef<HTMLDivElement>(null);
    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        setHeight(`${ref.current?.scrollHeight}px`);
    }, []);

    return (
        <>
            <AccordionTrigger
                data-test="categoryTrigger"
                onClick={toggleAccordion}
            >
                {t(theme)}
                <ImageComponent source={AccordionArrow} />
            </AccordionTrigger>
            <AccordeonDescription
                data-test="categoryDescription"
                ref={ref}
                currentHeight={height}
                isExpanded={isExpanded}
            >
                {t(description)}
            </AccordeonDescription>
        </>
    );
});

export default CategoryItem;
