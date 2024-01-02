import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import {clearCart} from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    
    const dispatch=useDispatch();
    
    const handleClearCart=()=>{
        dispatch(clearCart());
    }

    return(
        <div>
            <h1 className="font-bold text-3xl">Cart Items-{cartItems.length}</h1>
            <button 
            className="bg-green-100 p-2 m-5"
            onClick={()=>handleClearCart()}>
                ClearCart
            </button>
            {/* <FoodItem {...cartItems[0]}/> */}
            <div className="flex">
            {cartItems.map((item)=>(
                <FoodItem key={item.id} {...item}/>
            )) }
            </div>
            
        </div>
    );

};

export default Cart;

/** 
import { useSelector } from "react-redux";

const Cart=()=>{
    const store=useSelector((store)=>store);

    return(
        <div>
            <h1 className="font-bold text-3xl">Cart Items-{store.cart.items.length}</h1>
        </div>
    );

};

export default Cart;

*/