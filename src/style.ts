import { createGlobalStyle } from 'styled-components';

import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    // @font-face { 
    //   font-family: ''Poppins', Arial, sans-serif';
    //   font-display: swap;
    //   src: url('/assets/fonts/Avenir/Avenir-Regular.ttf') format('truetype');
    // }
    font-family: 'Poppins', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    line-height: 1.8;
    font-weight: 400;
    ul, li {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    img {
      width: 100%;
    }
    h1, h2, h3, h4, h5 {
      margin: 0;
    }
    p {
      margin: 0;
    }
    a {
      text-decoration: none;
      color: black;
    }
    .navbar-brand {
      display: inline-block;
      padding-top: 0.3125rem;
      padding-bottom: 0.3125rem;
      margin-right: -12rem;
      font-size: 1.25rem;
      line-height: inherit;
      white-space: nowrap;
  }
  .splide__arrow {
    line-height: 0 !important;
    border-radius: 5px !important;
    position: absolute !important;
    top: 50% !important;
    display: block;
    width: 30px;
    height: 40px;
    padding: 0;
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent !important;
    border: 1px solid #ccc;
    outline: none;
    background: transparent !important;
    z-index: 1;
  }
  button {
    border: none;
    background: #303390;
    color: #fff;
    padding: 8px 36px;
    border-radius: 25px;
    display: inline-block;
    margin-top: 10px;
    outline: none;
    cursor: pointer;
    height: 39px;
  }
}
`;
export const Container = styled.div`
    @media (min-width: 1200px) {
        max-width: 1140px !important;
    }
    @media (min-width: 992px) {
        max-width: 960px;
    }
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

export const CloseBtn = styled.a`
    color: white;
`;

export default {
    GlobalStyle,
};
