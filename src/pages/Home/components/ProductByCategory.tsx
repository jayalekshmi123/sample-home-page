import React from 'react';
import Slider from '../../../components/Slider';
import { Container } from '../../../style';
import { Products, ProductByCategoryCont, ImageContainer, ProductByCatDetails, BtnAction, OfferTag } from '../style';
import { FaHeart, FaShoppingCart, FaHamburger } from 'react-icons/fa';

type ProductByCategoryPropsType = {
    products: any;
    heading: string;
};

const ProductByCategory = (props: ProductByCategoryPropsType) => {
    const { products, heading } = props;
    return (
        <div className="divider">
            <Container>
                <div className="heading">
                    <h3>{heading}</h3>
                    <button className="view-all">View All</button>
                </div>
                <Products>
                    {products.map((product, index) => {
                        return (
                            <div className="prod-cont" key={index}>
                                <ProductByCategoryCont>
                                    <OfferTag offer={product.offer ? true : false}>{product.offer} % Off</OfferTag>

                                    <ImageContainer img={product.imgUrl} />
                                    <ProductByCatDetails>
                                        <span className="product-name">{product.name}</span>
                                        <span className="price">
                                            {product.currency}
                                            {product.price}
                                        </span>
                                    </ProductByCatDetails>
                                    <BtnAction>
                                        <span>
                                            <FaHamburger />
                                        </span>
                                        <span>
                                            <FaShoppingCart />
                                        </span>
                                        <span>
                                            <FaHeart />
                                        </span>
                                    </BtnAction>
                                </ProductByCategoryCont>
                            </div>
                        );
                    })}
                </Products>
            </Container>
        </div>
    );
};
export default ProductByCategory;
