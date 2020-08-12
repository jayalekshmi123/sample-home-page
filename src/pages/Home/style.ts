import styled from 'styled-components';
type imgProp = {
    img: any;
};

export const MainContainer = styled.div`
    min-height: 100vh;
    .heading {
        position: relative;
        margin-bottom: 34px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        h3 {
            font-size: 20px;
            line-height: 1.5;
            font-weight: 400;
            color: #000000;
        }
    }
    .view-all {
        background: red;
        position: absolute;
        right: 0;
        padding: 5px 15px;
        height: auto;
    }
    .divider {
        padding: 4em 0;
        position: relative;
    }
`;

export const FearturedContainer = styled.div`
    padding: 4em 0;
    position: relative;
    .product-div {
        float: left;
        height: 100%;
        margin: 10px;
        min-height: 1px;
        width: 258px;
    }
`;

export const FearturedProduct = styled.div`
    background-color: #fff;
    background-clip: border-box;
    border: 0px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    font-family: 'Lato', sans-serif;
    box-shadow: 2px 1px 6px 1px #e2e2e2;
`;
export const FearturedProductName = styled.div`
    text-align: center;
    font-weight: 700;
    line-height: 20px;
    color: #000;
    font-size: 17px;
    padding: 18px 5px 5px;
    height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const FearturedPriceBlock = styled.div`
    display: flex;
`;
export const FearturedCurrency = styled.span`
    font-size: 12px;
    color: #303391;
    vertical-align: top;
    line-height: 37px;
`;
export const FearturedAmount = styled.span`
    font-size: 20px;
    color: #303391;
    font-weight: 700;
    align-self: center;
`;
export const FeaturedPriceOfferBlock = styled.span`
    font-size: 11px;
    letter-spacing: 0.5px;
    color: gray;
    align-self: center;
    margin-left: 5px;
    .org {
        text-decoration: line-through;
    }
`;

export const FearturedPackSizeBlock = styled.div`
    display: flex;
    flex-direction: column;
    .packsize-head {
        margin: 9px 0;
    }
    .packsize-body {
        flex-direction: row;
        display: flex;
        justify-content: space-evenly;
    }
`;
type packSizePropsType = {
    index: number;
};
export const ProductPackSize = styled.div`
    width: 32%;
    border: 1px dashed #7b7b7b;
    display: inline-block;
    font-size: 11px;
    padding: 3px 10px;
    text-align: center;
    border-radius: 6px;
    color: #424242;
    flex-direction: column;
    display: flex;
    background: ${(props: packSizePropsType) => (props.index === 1 ? '#fff9e3' : 'none')};
`;

export const FearturedAddToCart = styled.div`
    display: inline-block;
    width: 100%;
    margin-top: 7px;
    text-align: center;
    svg {
        position: relative;
        left: 28px;
        top: 2px;
        color: white;
    }
    button {
        &:hover {
            background-color: red;
        }
    }
`;
export const ProductDetails = styled.div`
    font-size: 13px;
    padding: 0 13px 13px;
`;

export const CategoryBrandBlock = styled.div`
    width: 100%;
    display: inline-block;
    min-height: 211px;
    .name-block {
        display: flex;
        justify-content: center;
        width: 100%;
        color: #0d0d0d;
        line-height: 18px;
        font-size: 16px;
        margin-top: 12px;
        height: 36px;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        margin-bottom: 22px;
    }
`;

export const BrandBlockPicture = styled.span`
    display: block;
    max-width: 100% !important;
    margin: 0 auto;
    height: 196px;
    border-radius: 5px;
    background: ${(props: imgProp) => `url(${props.img}) center center / cover no-repeat`};
`;

export const CategoryBlockPicture = styled.span`
    background-color: #303390;
    display: block;
    border-radius: 50%;
    width: 160px;
    height: 120px;
    position: relative;
    padding-top: 40px;
    text-align: center;
    margin: 0 auto;
    background-image: ${(props: imgProp) => `url(${props.img})`};
    background-position: center center;
    background-repeat: no-repeat;
    :after {
        content: '';
        border: 2px solid #fff;
        width: 136px;
        height: 134px;
        position: absolute;
        top: 10px;
        left: 10px;
        border-radius: 50%;
    }
`;

type offerType = {
    offer: boolean;
};
export const OfferTag = styled.div`
    display: ${(props: offerType) => (props.offer ? 'inline-block;' : 'none')}
    background: #e90000;
    color: #fff;
    font-size: 11px;
    padding: 3px 11px;
    border-radius: 14px;
    margin-top: 15px;
    margin-left: 15px;
    margin-bottom: 15px;

`;

export const ImageContainer = styled.span`
    width: 100%;
    display: block;
    max-width: 62%;
    margin: 0 auto;
    height: 175px;
    position: relative;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    background: ${(props: imgProp) => `url(${props.img}) center center / cover no-repeat`};
    background-position: center center;
`;

export const Products = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    max-height: 733px;
    overflow: hidden;
    .prod-cont {
        max-width: 22%;
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        padding-top: 15px;
    }
`;
export const ProductByCategoryCont = styled.div`
    background-color: #fff;
    background-clip: border-box;
    border: 0px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    box-shadow: 2px 1px 6px 1px #e2e2e2;
    margin-bottom: 25px;
    border-radius: 10px;
    min-height: 300px;
`;
export const ProductByCatDetails = styled.span`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 19px;
    min-height: 60px;
    .product-name {
        font-size: 14px;
        margin-bottom: 5px;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 1px;
        height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .price {
        font-size: 11px;
        color: #303390;
    }
    :hover {
        font-size: 22px;
    }
`;
export const BtnAction = styled.div`
    ${ProductByCategoryCont}:hover & {
        visibility: visible;
    }
    &:hover ${ProductByCategoryCont} {
        visibility: visible;
    }
    visibility: hidden;
    display: flex;
    position: absolute;
    flex-direction: row;
    justify-content: space-evenly;
    width: 150px;
    bottom: 37px;
    left: 66px;
    span {
        color: #fff;
        background: #303391;
        width: 40px;
        height: 40px;
        margin: 0 auto;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        display: flex;
        cursor: pointer;
    }
    svg {
        color: white;
        background-color: #303390;
    }
`;
export const SubscribeContainer = styled.div`
    padding: 4em 0;
    position: relative;
    background: #f7f6f2;
    padding: 3rem;
    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
`;
export const SubscribeDetails = styled.div`
    display: flex;
    flex-direction: column;
    h2 {
        line-height: 1.5;
        font-weight: 400;
        font-size: 22px;
    }
    span {
        font-size: 15px;
        line-height: 1.8;
        font-weight: 400;
        color: gray;
    }
`;
export const SubscribeForm = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 36px;
    input {
        width: 100%;
        background: #fff !important;
        border: 1px solid transparent;
        color: black !important;
        font-size: 14px;
        font-weight: 300;
        padding: 1px 18px;
    }
    &&& button {
        padding: 8px 17px;
        border-radius: 0;
        outline: none;
        width: 119px;
        font-weight: 300;
        margin: 0;
    }
`;
export const FearturedContainer1 = styled.div`
    min-height: 100vh;
`;
