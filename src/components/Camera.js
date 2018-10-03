import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions";
import { bindActionCreators } from "redux";
import ReactStars from "react-stars";
import Typography from "@material-ui/core/Typography";

const Camera = ({ camera, addToCart }) => {

  const onSale = camera.onSale;
  let sale;
  if (onSale) {
    sale = 'ON SALE!'
  }

  return <div>
      <Card className="card">
        <CardImg top width="100%" src={camera.picture} alt="Card image cap" />
        <CardBody>
        <CardTitle>
          <Typography gutterBottom variant="headline" component="h2">{camera.name}</Typography>
        </CardTitle>
          <CardSubtitle className="sale">{sale}</CardSubtitle>
          <CardText>{camera.price}</CardText>
          <CardText>
            Rating:
            <ReactStars count={camera.rating} size={24} color2={"#ffd700"} />
          </CardText>
        <button type="button" class="btn btn-outline-primary" onClick={() => addToCart(camera.id)}>Add To Cart</button>
        </CardBody>
      </Card>
    </div>;
};


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addToCart
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Camera);
