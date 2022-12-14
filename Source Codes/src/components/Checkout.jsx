import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider";

function Checkout () {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className="checkoutLeft">
          <img src="" alt="" />
            <h2 className='checkoutTitle'>Your Cart</h2>
            {basket.map(item => (
                        <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
        </div>
        <div className="checkoutRight">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout;