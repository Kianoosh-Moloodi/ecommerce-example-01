import React from 'react';
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
        <div className="homeContainer">
            <img src='https://m.media-amazon.com/images/I/61MrG04w-nL._SX3000_.jpg' alt="" className='homeImage' />
            <div className="homeRow">
                <Product
                    id='1'
                    title='Apple iPhone 14 Pro'
                    price={1299}
                    rating={3}
                    image='https://m.media-amazon.com/images/I/61lKQWyMdDL._AC_SL1500_.jpg'
                />
                <Product
                    id='2'
                    title='Apple iPhone 14 Pro Max'
                    price={2099}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_SL1500_.jpg'
                />
                <Product
                    id='3'
                    title='Apple iPhone 14 Plus'
                    price={1539}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/61B0+qQriPL._AC_SX679_.jpg'
                />
                <Product
                    id='4'
                    title='Apple iPhone 14'
                    price={1389}
                    rating={3}
                    image='https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SL1500_.jpg'
                />
            </div>
            <div className="homeRow">
                <Product
                    id='5'
                    title='Apple iPad Pro with WiFi'
                    price={829}
                    rating={2}
                    image='https://m.media-amazon.com/images/I/81-fnyTJMWS._AC_SL1500_.jpg'
                />
                <Product
                    id='6'
                    title='Apple iPad Pro'
                    price={1099}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/81MOuqiAceS._AC_SL1500_.jpg'
                />
                <Product
                    id='7'
                    title='2022 Apple iPad Air'
                    price={813}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/61lv79X8rsL._AC_SL1500_.jpg'
                />
                <Product
                    id='8'
                    title='2021 Apple iPad'
                    price={355}
                    rating={3}
                    image='https://m.media-amazon.com/images/I/61zdQQORNML._AC_SL1500_.jpg'
                />
            </div>
        </div>
    </div>
  )
}

export default Home