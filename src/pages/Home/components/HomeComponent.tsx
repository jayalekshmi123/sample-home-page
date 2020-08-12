import React from 'react';
import PropTypes from 'prop-types';
import BannerComponent from './BannerComponent';
import FeaturedProducts from './FeaturedProducts';
import CategoryBrandComponet from './CategoryBrandComponent';
import ProductByCategory from './ProductByCategory';
import { MainContainer, SubscribeContainer, SubscribeForm, SubscribeDetails } from '../style';
import { Container } from '../../../style';
import { products } from '../mockData';

import banner1 from '../../../assets/images/bg_1.jpg';
import banner2 from '../../../assets/images/bg_2.jpg';
import banner3 from '../../../assets/images/mango.png';
import banner4 from '../../../assets/images/organic.png';

const propTypes = {};
const Home = () => {
    const bannerImages = [banner1, banner2];
    const bannerImages1 = [banner3, banner4];
    return (
        <MainContainer>
            <BannerComponent
                options={{
                    arrows: false,
                    rewind: true,
                    perPage: 1,
                    pagination: false,
                    autoplay: true,
                    perMove: 1,
                    gap: '1rem',
                    interval: 3000,
                }}
                bannerImages={bannerImages}
            />
            <FeaturedProducts />
            <CategoryBrandComponet type="category" />
            <Container>
                <BannerComponent
                    options={{
                        arrows: true,
                        rewind: true,
                        perPage: 1,
                        pagination: false,
                        autoplay: true,
                        perMove: 1,
                        gap: '1rem',
                        interval: 3000,
                    }}
                    bannerImages={bannerImages1}
                />
            </Container>
            <ProductByCategory heading="Fruit and Vegitables" products={products} />
            <CategoryBrandComponet type="brand" />
            <ProductByCategory heading="Fruit and Vegitables" products={products} />
            <SubscribeContainer>
                <Container>
                    <div className="row">
                        <SubscribeDetails>
                            <h2>Subcribe to our Newsletter</h2>
                            <span>Get e-mail updates about our latest shops and special offers</span>
                        </SubscribeDetails>
                        <SubscribeForm>
                            <input type="text" placeholder="Email Address" />
                            <button>Subscribe</button>
                        </SubscribeForm>
                    </div>
                </Container>
            </SubscribeContainer>
        </MainContainer>
    );
};
Home.propTypes = propTypes;
export default Home;
