import React from 'react';
import Slider from '../../../components/Slider';
import { SplideSlide } from '@splidejs/react-splide';
import { FaShoppingCart } from 'react-icons/fa';

import { FearturedContainer, OfferTag, ImageContainer, ProductDetails } from '../style';
import { products } from '../mockData';
import { Container } from '../../../style';
import Product from './Product';

const FeaturedProducts = () => {
    return (
        <FearturedContainer>
            <Container>
                <div className="heading">
                    <h3>Featured Products</h3>
                </div>
                <Slider
                    options={{
                        arrows: true,
                        rewind: true,
                        perPage: 4,
                        pagination: false,
                        autoplay: false,
                        perMove: 3,
                        gap: '1rem',
                        interval: 3000,
                    }}
                >
                    {products.map((product, index) => {
                        return (
                            <SplideSlide key={index}>
                                <div className="product-div">
                                    <Product product={product} />
                                </div>
                            </SplideSlide>
                        );
                    })}
                </Slider>
            </Container>
        </FearturedContainer>
    );
};
export default FeaturedProducts;
