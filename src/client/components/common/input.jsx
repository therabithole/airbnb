import React, { Component } from "react";
const Input = ({ name, label, value, error, type, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}></label> {label}
      <input
        // value={account.username}
        value={value}
        // onChange={this.handleChange}
        onChange={onChange}
        autoFocus
        id={name}
        name={name}
        type={type}
        className="form-control"
      />
      {error && <div className="alert alert-danger"> {error} </div>}
    </div>
  );
};

export default Input;
