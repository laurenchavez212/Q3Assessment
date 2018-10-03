import React from 'react'
import { Card, CardTitle } from "reactstrap"
import CartItemsList from "./CartItemsList";
import { connect } from "react-redux"

const Cart = (props) => {
    let camerasInCart = props.cameras
        .filter(camera => camera.inCart)
    
    let subTotal = camerasInCart.reduce((acc, camera) => acc + parseFloat(camera.price.replace(/,/g, "").slice(1)), 0);

    return (
        <div>
            <Card className="myCart" body>
        <CardTitle>Your Cart</CardTitle>
        <CartItemsList cartItems={camerasInCart} />
        <p>Subtotal: ${subTotal.toFixed(2)}</p>
        <p>Tax: ${(subTotal * 0.086).toFixed(2)}</p>
        <h6>Total: ${(subTotal * 1.086).toFixed(2)}</h6>
        <button type="button" class="btn btn-outline-primary">Checkout</button>
            </Card>
        </div>
    )
}

const mapStateToProps = state => ({
    cameras: state.cameras
})

export default connect(mapStateToProps)(Cart)