import React from 'react'

const CartItem = ({item,deleteFromCart}) => {

    const {id, name , price, qty} = item;

  return (

    <div style={{borderBottom:"thin solid gray"}}>
        <h3>{name}</h3>

        <h5> ${price}.00 x {qty} = ${price * qty} </h5>
          {/*ELIMINAR DE PRODUCTO DE UNO*/}
        <button onClick={() => deleteFromCart(id)}>Eliminar uno</button> <br />   


      {/*ELIMINAR TODA LA CANTIDAD*/}
        <button onClick={() =>deleteFromCart(id, true)}>Eliminar todos</button>
        
    </div>
  )
}

export default CartItem