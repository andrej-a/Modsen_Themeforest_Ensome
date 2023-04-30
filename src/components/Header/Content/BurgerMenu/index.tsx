import React, { useEffect, useState } from 'react';

import DropDownMenuList from '@/components/DropDownMenuList';
import FollowUs from '@/components/FollowUs';

import { burgerMenuLinks } from '../config/headerLinks';
import {
    BurgerMenuContainer,
    DropDownContainer,
    HandlerContainer,
    Menu,
    MenuHandler,
} from './styles';

const BurgerMenu = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const onHandleMenu = (status: boolean) => () => {
        setIsMenuActive(status);
    };
    useEffect(() => {
        document.documentElement.style.overflow = isMenuActive ? 'hidden' : '';
    }, [isMenuActive]);
    return (
        <BurgerMenuContainer>
            <HandlerContainer>
                <MenuHandler onClick={onHandleMenu(!isMenuActive)} />
            </HandlerContainer>
            <Menu isMenuActive={isMenuActive}>
                <DropDownContainer>
                    <DropDownMenuList
                        onHandleMenu={onHandleMenu}
                        type="dark"
                        settings={burgerMenuLinks}
                    />
                </DropDownContainer>
                <FollowUs type="dark" />
            </Menu>
        </BurgerMenuContainer>
    );
};

export default BurgerMenu;
