import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/CartContext';
import { useContext } from 'react';

const HeaderCartButton = (props) => {
  const cartCtx=useContext(CartContext);
  const numberOfItems=cartCtx.items.reduce((cartNumber,item)=>{
    return cartNumber+item.amount;
  },0);
  return (
    <button className={classes.button} onClick={props.onShowCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
}
export default HeaderCartButton;