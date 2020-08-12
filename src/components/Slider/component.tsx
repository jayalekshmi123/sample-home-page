import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import banner1 from '../../assets/images/bg_1.jpg';
import banner2 from '../../assets/images/bg_2.jpg';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

type SliderProps = {
    options: any;
    children: any;
};

const Slider = (props: SliderProps) => {
    const { options, children } = props;
    return (
        <Splide
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
            {children}
        </Splide>
    );
};

export default Slider;
