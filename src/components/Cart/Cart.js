import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart=props=>{
    const cartsItems=(
        <ul className={classes['cart-items']}>
            {[{id:"c1",name:"sushi",amount:2,price:133}].map((items)=>(
                <li>{items.name}</li>
            ))}
        </ul>
    );
    return (
        <Modal hideCart={props.hideCart}>
            {cartsItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.36</span>
            </div>
            <div className={classes.action}>
                <button className={classes["button--alt"]} onClick={props.hideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}


export default Cart;