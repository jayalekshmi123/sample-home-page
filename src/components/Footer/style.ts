import styled from 'styled-components';
import { Container } from '../../style';

export const Container1 = styled(Container)`
    justify-content: space-evenly;
`;
export const FooterWrapper = styled.footer`
    font-size: 14px;
    padding: 7em 0;
    color: #000000;
    position: relative;
    .footer-logo {
        max-width: 38%;
        img {
            max-width: 100%;
        }
    }
    .row {
        display: flex;
        flex-direction: row;
    }
    .first {
        margin-right: 1.5rem;
    }
    .text {
        align-self: center;
    }
    .copy-right {
        display: flex;
        justify-content: center;
    }
    ul {
        display: flex;
        flex-direction: column;
    }
    li {
        padding: 0.5rem 0;
        display: flex;
    }
    h2 {
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 500;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 3rem;
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
`;
export const SocialButtons = styled.ul`
    display: flex;
    flex-direction: row !important;
    margin-top: 3rem;
    justify-content: space-evenly;
    li {
        margin: 0 10px 0 0;
        display: inline-block;
    }
`;

export const FooterWrapper1 = styled.nav`
    display: flex;
    flex-direction: column;
`;
