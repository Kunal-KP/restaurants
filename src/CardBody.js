import React, { Component } from "react";
import Button from "./Button";
import StarRatingComponent from "react-star-rating-component";
class CardBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-body">
        <h2>{this.props.restaurant["Restaurant Name"]}</h2>

        <div className="body-content">
          <div className="body-content-details">
            <p>Cuisines: </p>
            <p className="pl10">{this.props.restaurant.Cuisines}</p>
          </div>
          <div className="body-content-details">
            <p>Cost For Two: </p>
            <p className="pl10">
              {this.props.restaurant["Average Cost for two"]}/-
            </p>
          </div>
          <div className="body-content-details">
            <p>Rating: </p>

            <StarRatingComponent
              className="pl10"
              name="rating"
              starCount={5}
              value={Math.round(this.props.restaurant["Aggregate rating"])}
              editing={false}
            />
          </div>
        </div>

        <Button />
      </div>
    );
  }
}

export default CardBody;
