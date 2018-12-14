import React from "react";
import { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

class CardStack extends Component {
  state = {};
  render() {
    return (
      <Card>
        <CardContent color={this.props.color} style={this.props.style}>
          {this.props.children}
        </CardContent>
      </Card>
    );
  }
}

export default CardStack;
