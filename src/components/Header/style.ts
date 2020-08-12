import styled from 'styled-components';
import { Container, CloseBtn } from '../../style';

export const Container1 = styled(Container)`
    justify-content: space-evenly;
    display: flex;
`;
export const HeaderNav = styled.nav`
    padding: 0.5rem 1rem 0;
    align-items: center;
    display: flex;
    position: relative;
    font-size: 13px;
    .img-fluid {
        max-width: 35%;
    }
    .select-text {
        font-size: 17px;
    }
    .cart {
        display: flex;
        flex-direction: row;
        align-self: center;
        padding-top: 7px;
        color: #444;
        justify-content: space-around;
        width: 4%;
        align-items: center;
        margin-left: 70px;
        font-size: 15px;
    }
    .res-icon {
        padding-top: 7px;
        align-self: center;
        justify-content: center;
        display: flex;
    }
`;

export const ShopByCategory = styled.div`
    align-self: center;
    text-align: center;
    border-radius: 25px;
    margin-left: 25px;
    display: inline-block;
    vertical-align: top;
    button {
        padding: 8px 36px 8px 18px;
    }
    .MuiOutlinedInput-root {
        border-radius: 25px;
    }
    .icon-position {
        position: relative;
        left: -27px;
        top: 3px;
        color: white;
    }
`;
export const SearchBlock = styled.div`
    margin-top: 10px;
    margin-left: 11px;
    display: flex;
    align-self: center;
    svg {
        align-self: center;
        position: relative;
        left: 14px;
    }
    input {
        height: 2px;
    }
    .MuiOutlinedInput-root {
        border-radius: 25px;
        height: 36px;
    }
    .search-icon {
        display: flex;
        position: relative;
        width: 54px;
        border-radius: 0px;
        background: #303391;
        border: 0;
        color: #fff;
        margin-left: -15px;
        border-radius: 0 25px 25px 0;
    }
`;

export const ChooseLocationBlock = styled.div`
    align-self: center;
    button {
        background: white;
        border: none;
        color: black;
    }
`;

export const SignUpBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: center;
    display: flex;
    ul {
        flex-direction: inherit;
        display: inherit;
    }
`;

type showSideNaveBarType = {
    show: boolean;
};
export const SideNavBar = styled.div`
    background-color: #da2222;
    height: 100%;
    overflow-x: hidden;
    padding-top: 60px;
    position: fixed;
    right: 0;
    top: 0;
    transition: 0.7s;
    width: ${(props: showSideNaveBarType) => (props.show ? '260px' : '0')};
    z-index: 2;
`;
export const SideCloseBtn = styled(CloseBtn)`
    font-size: 36px;
    margin-left: 50px;
    position: absolute;
    right: 25px;
    top: 0;
`;

export const SideLogo = styled.div`
    text-align: center;
    padding: 0px 74px;
`;
type imgType = {
    img: string;
};
export const SideLogoImage = styled.span`
    max-width: 85%;
    margin-bottom: 30px;
    display: block;
    height: 116px;
    background: ${(props: imgType) => `url(${props.img}) center center / cover no-repeat`};
`;

export const SideNavBarContent = styled.div`
    position: relative;
    z-index: 1;
    margin-bottom: 25px;
    color: white;
    ul {
        disply: flex;
        flex-direction: column;
    }
    li {
        text-transform: uppercase;
        display: block;
        font-size: 14px;
        padding: 12px 20px 12px 40px;
        border-bottom: 1px dashed #ffffff30;
        position: relative;
        color: #fff;
        letter-spacing: 1px;
        :before {
            content: '';
            display: block;
            width: 8px;
            height: 8px;
            border: 2px solid #ffffff;
            border-radius: 50%;
            position: absolute;
            left: 20px;
            top: 18px;
        }
    }
`;
