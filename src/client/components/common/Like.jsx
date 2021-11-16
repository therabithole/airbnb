import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Like extends React.Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";

    return (
      <i
        className={classes}
        aria-hidden="true"
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
      >
        Like
      </i>
    );
  }
}

export default Like;
