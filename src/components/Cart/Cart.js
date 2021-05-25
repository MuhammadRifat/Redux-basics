import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Cart = (props) => {
    const {cart, removeFromCart} = props;
    console.log(props);
    return (
        <div>
            <h3>Cart: {cart.length}</h3>
            <ul>
                {
                    cart.map(item => <li>{item.productName} <button onClick={() => removeFromCart(item.cartId)}> x</button></li>)
                }    
            </ul>    
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
    removeFromCart:removeFromCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// connectToStore(Shop);
export default connect(mapStateToProps, mapDispatchToProps)(Cart);