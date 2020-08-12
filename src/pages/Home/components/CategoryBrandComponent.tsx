import React from 'react';
import Slider from '../../../components/Slider';
import { SplideSlide } from '@splidejs/react-splide';
import { Container } from '../../../style';
import { brands, category } from '../mockData';
import { CategoryBrandBlock, CategoryBlockPicture, BrandBlockPicture } from '../style';

type ComponentPropType = {
    type: string;
};
const CategoryBrandComponet = (props: ComponentPropType) => {
    const { type } = props;
    const ListDatas = type === 'category' ? category : brands;
    return (
        <Container>
            <div className="heading">
                <h3>{type === 'category' ? 'Shop By Category' : 'Popular Brands'}</h3>
                <button className="view-all">View All</button>
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
                {ListDatas.map((data, index) => {
                    return (
                        <SplideSlide key={index}>
                            <CategoryBrandBlock>
                                {type === 'category' && (
                                    <React.Fragment>
                                        <CategoryBlockPicture img={data.imgUrl} />
                                        <span className="name-block">{data.name}</span>
                                    </React.Fragment>
                                )}
                                {type === 'brand' && <BrandBlockPicture img={data.imgUrl} />}
                            </CategoryBrandBlock>
                        </SplideSlide>
                    );
                })}
            </Slider>
        </Container>
    );
};
export default CategoryBrandComponet;
