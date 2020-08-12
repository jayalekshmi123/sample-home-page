import React from 'react';
import Slider from '../../../components/Slider';
import { SplideSlide } from '@splidejs/react-splide';
type bannerProsType = {
    options: any;
    bannerImages: any;
};

const bannerComponent = (props: bannerProsType) => {
    const { options, bannerImages } = props;
    return (
        <Slider
            options={{
                arrows: options.arrows,
                rewind: options.rewind,
                perPage: options.perPage,
                pagination: options.pagination,
                autoplay: options.autoplay,
                perMove: options.perMove,
                gap: options.gap,
                interval: options.interval,
            }}
        >
            {bannerImages.map((image, index) => {
                return (
                    <SplideSlide key={index}>
                        <img src={image} alt="Image" />
                    </SplideSlide>
                );
            })}
        </Slider>
    );
};
export default bannerComponent;
