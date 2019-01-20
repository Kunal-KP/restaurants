import React, { Component } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import Axios from "axios";

const API_URL = "http://localhost:8000/smartq/get-resturants";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }
  componentDidMount() {
    this.fetchRestaurantDetails();
  }

  async fetchRestaurantDetails() {
    let results = await Axios.get(API_URL);
    let restaurants = results.data;
    console.log("Restaurants: ", restaurants);
    this.setState({ restaurants });
  }
  render() {
    return (
      <div className="bodyContainer">
        <Row>
          {this.state.restaurants.length > 0 ? (
            this.state.restaurants.map((restaurant, index) => (
              <Col xs={24} sm={12} md={8} lg={6} xl={6} key={index}>
                <div className="card">
                  <CardHeader
                    image={"https://source.unsplash.com/user/erondu/600x400"}
                  />
                  <CardBody restaurant={restaurant} />
                </div>
              </Col>
            ))
          ) : (
            <p>No Restaurants Found</p>
          )}
        </Row>
      </div>
    );
  }
}

export default App;
