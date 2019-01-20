import React, { Component } from "react";
class CardHeader extends Component {
  render() {
    const { image } = this.props;
    var style = {
      backgroundImage: "url(" + image + ")"
    };
    return (
      <header style={style} id={image} className="card-header">
        {/* <h4 className="card-header--title">Journal</h4> */}
      </header>
    );
  }
}

export default CardHeader;
