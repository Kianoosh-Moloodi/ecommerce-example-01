import React from 'react'
import { useStateValue } from './StateProvider'

function Product  ({id, title, image, price, rating}) {

  const [state, dispatch] = useStateValue();
  
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>
        <div className="productInfo">
            <p>{title}</p>
            <p className="productPrice">
              <small>€</small>
              <strong>{price}</strong>
            </p>
            <div className="productRating">
              {Array(rating).fill().map((_,i) => (
                <p>⭐</p>
              ))}
            </div>
        </div>
        <img src={image} alt="productImage" />
        <button onClick={addToBasket}>Add to Card</button>
    </div>
  )
}

export default Product;