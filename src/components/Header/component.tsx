import React, { useState } from 'react';
import MultiLevelSelect from 'react-multi-level-selector';
// import { MenuItem } from '@trendmicro/react-dropdown';
import { TextField, Select, MenuItem } from '@material-ui/core';
import { FaSearch, FaAngleDown, FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';

import {
    HeaderNav,
    Container1,
    SideNavBar,
    SideCloseBtn,
    SideLogo,
    SideNavBarContent,
    SideLogoImage,
    ShopByCategory,
    SearchBlock,
    ChooseLocationBlock,
    SignUpBlock,
} from './style';
import { Container } from '../../style';
import logoImg from '../../assets/images/logo.png';
import sideLogo from '../../assets/images/logo-white.png';

import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';
function iconStyles() {
    return {
        iconStyle: { height: 2 },
        filter: { fontSize: 35, margin: 12, color: '#4b4c4e' },
    };
}
function Header() {
    const classes = makeStyles(iconStyles)();
    const [showSideNaveBar, setSideNaveBar] = useState(false);
    return (
        <HeaderNav>
            <Container1>
                <a className="navbar-brand" href="index.html">
                    <img className="img-fluid" src={logoImg} alt="Consumerfed" />
                </a>
                <ShopByCategory>
                    <button>Shop By Ctaegory</button>
                    <span className="icon-position"><FaAngleDown /></span>
                </ShopByCategory>
                <SearchBlock>
                    <TextField id="outlined-basic" placeholder="Search" variant="outlined" />
                    <div className="search-icon">
                        <FaSearch />
                    </div>
                </SearchBlock>
                <ChooseLocationBlock>
                    <button type="button">
                        <FaMapMarkerAlt /> &nbsp;{' '}
                        <span className="select-txt">
                            Slecect Your Location &nbsp;
                            <FaAngleDown />
                        </span>
                    </button>
                </ChooseLocationBlock>
                <SignUpBlock>
                    <ul>
                        <li>
                            <a href="#">Login &nbsp; </a>
                        </li>
                        <li> | </li>
                        <li>
                            <a href="#">&nbsp; Sign Up</a>
                        </li>
                    </ul>
                </SignUpBlock>
                <div className="cart">
                    <FaShoppingCart /> [0]
                </div>
                <a className="res-icon" href="#">
                    <img
                        src="images/nav.png"
                        alt=""
                        onClick={() => {
                            setSideNaveBar(true);
                        }}
                    />
                </a>
            </Container1>
            <SideNavBar show={showSideNaveBar}>
                <SideCloseBtn
                    onClick={() => {
                        setSideNaveBar(false);
                    }}
                >
                    x
                </SideCloseBtn>
                <SideLogo>
                    <SideLogoImage img={sideLogo} />
                </SideLogo>
                <SideNavBarContent>
                    <ul>
                        <li>About Us</li>
                        <li>What we sell</li>
                        <li>Features</li>
                        <li>Rewards</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                    </ul>
                </SideNavBarContent>
            </SideNavBar>
        </HeaderNav>
    );
}

export default Header;
