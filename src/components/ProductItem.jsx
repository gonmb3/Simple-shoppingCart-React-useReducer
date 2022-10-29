import React from 'react'

const ProductItem = ({data, addToCart}) => {

    const {id, name , price} = data;

  return (

    <div style={{border:"thin solid gray", padding:"1rem"}}>
        
        <h3>{name}</h3>

        <h4> ${price}.00 </h4>

        <button onClick={() => addToCart(id) }>Agregar </button>   {/*AGREGAR AL CARRITO*/}
    </div>
  )
}

export default ProductItem