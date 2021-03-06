import React from 'react'
import { useStateValue } from '../store/StateProvider'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import FlipMove from 'react-flip-move';

function Checkout() {
    const [{basket}, dispatch] = useStateValue()


    let cartItems;

    if(basket.length === 0){
        cartItems = <h3>EMPTY</h3>
    }else{
        cartItems =  basket.map(item => (
            <CheckoutProduct
              id={item.id}
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              quantity={item.quantity}
            />
          ))
    }
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
                />

                <div>
                <h2 className="checkout__title">Your Shopping Cart Items</h2>
                <FlipMove>
                    { cartItems }
                </FlipMove>
                </div>
            </div> 

            <div className="checkout__right">
                <Subtotal />
            </div>
    </div>
    )
}

export default Checkout
