import React from "react";
import { Component } from "react";
import { Button } from "reactstrap";

class PaymentButton extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick = (e) => {
    this.props.onClick();
  }
  render() {
    return (
      <Button
        className={this.props.className}
        type={this.props.type}
        color="primary"
        size={this.props.size}
        onClick={this.onClick}
      >
        {this.props.children}
      </Button>
    );
  }
}

class DarkButton extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick = (e) => {
    this.props.onClick();
  }
  render() {
    return (
      <Button
        className={this.props.className}
        type={this.props.type}
        color="dark"
        size={this.props.size}
        onClick={this.onClick}
      >
        {this.props.children}
      </Button>
    );
  }
}

class LightButton extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick = (e) => {
    this.props.onClick();
  }
  render() {
    return (
      <Button
        className={this.props.className}
        type={this.props.type}
        color="secondary"
        size={this.props.size}
        onClick={this.onClick}
      >
        {this.props.children}
      </Button>
    );
  }
}

export { PaymentButton, DarkButton, LightButton };
