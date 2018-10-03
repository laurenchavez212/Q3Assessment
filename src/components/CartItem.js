import React from "react"
import { connect } from "react-redux"
import { removeFromCart } from "../redux/actions"
import { bindActionCreators } from "redux"
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const CartItem = ({camera, removeFromCart}) => {
  return <div className="cartItem">
      <Typography gutterBottom variant="headline" component="h2">
        {camera.name}
    </Typography>
    <button type="button" class="btn btn-outline-primary" onClick={() => removeFromCart(camera.id)}>
        Remove
      </button>
    </div>;
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
      removeFromCart
    }, dispatch
  );

export default connect(null, mapDispatchToProps)(CartItem);
