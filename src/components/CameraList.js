import React from "react";
import { connect } from "react-redux";
import Camera from "./Camera";
import { Container } from "reactstrap";

const CameraList = (props) => {
  let searchedCameras = props.cameras.filter(camera =>
    camera.name.toLowerCase().includes(props.term.toLowerCase())
  );

  let listOfCameras = searchedCameras.map(camera => (
    <Camera key={camera.id} camera={camera} />
  ));

  return (
    <div className="container">
      <Container>{listOfCameras}</Container>
    </div>
  )
};

const mapStateToProps = state => ({
  cameras: state.cameras
});

export default connect(mapStateToProps)(CameraList);
