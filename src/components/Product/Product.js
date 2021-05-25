import React from 'react';

const Product = ({product, addToCart}) => {
    const {name, Id} = product;
    return (
        <div style={{padding: '10px', border: '1px solid lightgray', margin: '5px'}}>
            <h3>{name}</h3>
            <button onClick={() => addToCart(Id, name)}>Add to cart</button>
        </div>
    );
};

export default Product;