import React, { Component } from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import TopNav from "./components/TopNav";
import SearchBar from './components/SearchBar'
import Cameralist from "./components/CameraList";
import Cart from "./components/Cart";
import { connect } from "react-redux";
import { fetchCameras } from './redux/actions'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

library.add(faStroopwafel);

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }

  
  updateState = (term) => {
    this.setState({
      term: term
    })
  }
    componentDidMount() {
      this.props.fetchCameras();
    }

  render() {
    return <div className="App">
        <TopNav />
      <SearchBar term={this.state.term} updateTerm={this.updateState} />
        <Container>
          <Row>
            <Col>
            <Cameralist term={this.state.term}/>
          </Col>
          <Col>
            <Cart />
            </Col>
          </Row>
        </Container>
      </div>;
  }
}

const mapStateToProps = state => ({
  cameras: state.cameras
})

export default connect(
  mapStateToProps,
  { fetchCameras }
)(App);
