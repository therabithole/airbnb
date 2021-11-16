import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";
import BaseForm from "./common/form";

class RegisterForm extends BaseForm {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("name"),
  };

  doSubmit = () => {
    // Call the Server

    console.log("form submitted");
  };

  render() {
    return (
      <section>
        <h1> Register Form </h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Register")}
        </form>
      </section>
    );
  }
}

export default RegisterForm;
