import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";
import BaseForm from "./common/form";

class LoginForm extends BaseForm {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // Call the Server

    console.log("form submitted");
  };

  render() {
    // const { data, errors } = this.state;

    return (
      <section>
        <h1> Login Form </h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </section>
    );
  }
}

export default LoginForm;
