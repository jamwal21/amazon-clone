import React, { forwardRef } from 'react';
import { useStateValue } from '../store/StateProvider';
import './CheckoutProduct.css'

const CheckoutProduct = forwardRef(({ id, image, title, price, rating, quantity, hideButton }, ref) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    const increaseItem = () =>{
        //dispatch the item into the data layer
        dispatch({
          type:'ADD_TO_BASKET',
          item: { id }
        })
      }

    return (
        <div ref={ref} className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt="" />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                <div className='checkoutProduct__quantity'>
                    <span><strong>Quantity :</strong> {quantity}</span>
                </div>
                {!hideButton && (
                    <>
                        <button onClick={increaseItem}>Increase Item</button>
                        <button onClick={removeFromBasket}>Remove Item</button>
                    </>
                        
                )}
            </div>
        </div>
    )
})

export default CheckoutProduct