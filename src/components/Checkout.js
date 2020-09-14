import React from 'react'
import { useStateValue } from '../store/StateProvider'
import "./Checkout.css"
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket}, dispatch] = useStateValue()


    let cartItems;

    if(basket.length === 0){
        cartItems = <h2>Start adding items</h2>
    }else{
        cartItems =  basket.map(( item ) => (
            <div>
                <p>{item.title}</p>
                <p className="product__price">
                <small>$</small>
                <strong>{item.price}</strong>
                </p>
                {Array(item.rating)
                    .fill()
                    .map((_, i) => (
                    <p>🌟</p>
                    ))}
            </div>
    ))
    console.log(basket);
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
                <h2 className="checkout__title">Your shopping Basket</h2>
                {
                   cartItems    
                }
                </div>
            </div> 

            <div className="checkout__right">
                <Subtotal />
            </div>
    </div>
    )
}

export default Checkout
