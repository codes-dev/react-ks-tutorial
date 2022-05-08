import React from 'react';
import './product-card.scss';

export const ProductCard = (props) => (
    <div className='card-container'>
        <img alt='product' src={`https://robohash.org/${props.product.id}?set=set2&size=180x180`} />
        <h2>{props.product.name}</h2>
        <a href={`mailto:${props.product.email}`}>
            {props.product.email}
        </a>
    </div>
)