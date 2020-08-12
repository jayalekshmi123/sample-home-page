import React from 'react';
import {
    FeaturedPriceOfferBlock,
    FearturedAmount,
    FearturedCurrency,
    FearturedPriceBlock,
    FearturedProductName,
    FearturedProduct,
    OfferTag,
    ImageContainer,
    ProductDetails,
    FearturedPackSizeBlock,
    FearturedAddToCart,
    ProductPackSize,
} from '../style';
import { FaShoppingCart } from 'react-icons/fa';

type ProductPropType = {
    product: any;
};
const Product = (props: ProductPropType) => {
    const { product } = props;
    return (
        <FearturedProduct>
            <OfferTag offer={product.offer ? true : false}>{product.offer} % Off</OfferTag>
            <ImageContainer img={product.imgUrl} />
            <FearturedProductName>{product.name}</FearturedProductName>
            <ProductDetails>
                <FearturedPriceBlock>
                    <FearturedCurrency>{product.currency}</FearturedCurrency>
                    <FearturedAmount>{product.price}</FearturedAmount>
                    <FeaturedPriceOfferBlock>
                        (₹1/gram) <span className="org">₹200</span> Save ₹1 (1%)
                    </FeaturedPriceOfferBlock>
                </FearturedPriceBlock>
                <FearturedPackSizeBlock>
                    <span className="packsize-head">Pack Size</span>
                    <div className="packsize-body">
                        {product.packSizes.map((pack, index) => {
                            return (
                                <ProductPackSize index={index} key={index}>
                                    <span className="kg">{pack.packSize}</span>
                                    <span className="rsprice">₹ {pack.price}</span>
                                </ProductPackSize>
                            );
                        })}
                    </div>
                </FearturedPackSizeBlock>
                <FearturedAddToCart>
                    <FaShoppingCart />
                    <button>Add to Cart</button>
                </FearturedAddToCart>
            </ProductDetails>
        </FearturedProduct>
    );
};
export default Product;
