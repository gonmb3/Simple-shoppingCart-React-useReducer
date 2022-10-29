import React from 'react'
import { useReducer } from 'react';
import { shoppingInitialState, shoppingReducer } from './../reducers/shoppingReducer';
import CartItem from './CartItem';
import ProductItem from './ProductItem';
import { TYPES } from './../actions/shoppingActions';

const ShoppingCart = () => {

    const [state,dispatch] = useReducer(shoppingReducer ,shoppingInitialState)

    const {products, cart} = state;
                                                                    // AGREGAR AL CARRITO
    const addToCart = (id) => {
        dispatch({type:TYPES.ADD_TO_CART,payload:id})
    }

    const deleteFromCart = (id, all=false) => {
        
        if(all) {
            dispatch({type:TYPES.REMOVE_FROM_CART, payload:id})
        }else{
            dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload:id})
        }
    }

    const clearCart = () => {
        dispatch({type:TYPES.CLEAR_CART})     // VACIAR CARRITO
    }


  return (
    <div>
        <h2>ShoppingCart</h2>

        <article className='box grid-resp '>
           {
            products.map(item => <ProductItem data={item} key={item.id} addToCart={addToCart} />)
           }
        </article>
                <h3>carrito</h3>

        <article className="box">
            <button onClick={clearCart}>Limpiar carrito</button>

            {
                cart.map((item,index )=> <CartItem key={index} item={item} clearCart= {clearCart}  deleteFromCart={deleteFromCart} />)
            }
        </article>
    </div>
  )
}

export default ShoppingCart