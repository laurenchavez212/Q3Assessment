import React from 'react'
import CartItem from './CartItem'

const CartItemsList = (props) => {

    let listOfItems = props.cartItems.map(camera => <CartItem key={camera.id} camera={camera} />)


    return (
        <div>{listOfItems}</div>
    )
}

export default CartItemsList;