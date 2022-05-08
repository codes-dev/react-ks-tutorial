import React from 'react';
import { ProductCard } from '../product-card/product-card.component';
import './product-card-list.scss';

export const ProductCardList = (props) => {
    return <div className="product-card-list">
        {props.products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>;
}