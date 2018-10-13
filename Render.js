import React from "react";

class Render extends React.Component {
  render() {
    return this.props.children();
  }
}

export default Render;
