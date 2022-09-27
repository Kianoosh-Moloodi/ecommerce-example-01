import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'

const Subtotal = () => {
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value) => (
                <>
                    Subtotal ({basket.length} items) :
                    <strong>${value}</strong>
                </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal