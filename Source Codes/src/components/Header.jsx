import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RedeemIcon from '@mui/icons-material/Redeem';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header () {

  const [{basket}, dispatch] = useStateValue();
  
  return (
    <div className='header'>
      <Link to="/" style={{textDecoration:'none'}}>
        <div className="headerLogo">
          <RedeemIcon className='headerLogoImage' fontSize='large' />
          <h2 className='headerLogoTitle'>Ecommerce Shop</h2>
        </div>
      </Link>
      <div className="headerSearch">
        <input type="text" className='headerSearchInput' />
        <SearchRoundedIcon className='headerSearchIcon' />
      </div>
      <div className="headerNav">
        <div className="navItem">
          <span className="navItemLineOne">Hello Guest</span>
          <span className="navItemLineTwo">Sign In</span>
        </div>
        <div className="navItem">
          <span className="navItemLineOne">Your</span>
          <span className="navItemLineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{textDecoration:'none'}}>
          <div className='navItemBasket'>
            <ShoppingCartIcon />
            <span className="navItemLineTwo navBasketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header;