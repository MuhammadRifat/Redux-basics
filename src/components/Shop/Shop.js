import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {
    const {products, addToCart} = props;
    console.log(props);
    return (
        <div>
            {
                products.map( product => <Product product={product} addToCart={addToCart}  key={product.Id}></Product>)
            }
        </div>
    );
};


const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// connectToStore(Shop);
export default connect(mapStateToProps, mapDispatchToProps)(Shop);