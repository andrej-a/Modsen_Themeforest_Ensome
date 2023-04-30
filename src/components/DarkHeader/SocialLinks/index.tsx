import React from 'react';
import { ReactSVG } from 'react-svg';

import footerLogoArray from '@/config/logoLinks';

import { ContentLinks, Link } from './styles';

const SocialLinks = () => {
    return (
        <ContentLinks>
            {footerLogoArray.map(logo => {
                return (
                    <Link
                        key={logo}
                        href="https://www.google.com/"
                        target="_blank"
                    >
                        <ReactSVG src={logo} />
                    </Link>
                );
            })}
        </ContentLinks>
    );
};

export default SocialLinks;
