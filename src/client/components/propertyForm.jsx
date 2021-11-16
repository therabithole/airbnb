import React, { Component } from "react";
import Joi from "joi-browser";
import BaseForm from "./common/form";
import {
  getProperty,
  saveProperty,
  getProperties,
} from "../../node/services/fakePropertyService";
import { getAmenities } from "../../node/services/fakeAmenityService";

class PropertyForm extends BaseForm {
  state = {
    data: {
      title: "",
      amenityId: "",
      rooms: "",
      price: "",
    },
    amenities: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    amenityId: Joi.string().label("Amenity"),
    price: Joi.number().label("Price"),
    rooms: Joi.number().label("Rooms"),
  };

  componentDidMount() {
    const amenities = getAmenities();
    this.setState({ amenities });

    const propertyId = this.props.match.params.id;
    if (propertyId === "new") return;

    const property = getProperty(propertyId);
    if (!property) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(property) });
  }

  mapToViewModel(property) {
    return {
      _id: property._id,
      title: property.title,
      amenityId: property.amenity._id,
      price: property.price,
      rooms: property.rooms,
    };
  }

  doSubmit = () => {
    // Call the Server

    saveProperty(this.state.data);
    console.log("form submitted", this.state.data);
    this.props.history.push("/properties");
  };

  render() {
    console.log(this.state);
    return (
      <section>
        <h1> Property Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("amenityId", "Amenity", this.state.amenities)}
          {this.renderInput("price", "Price")}
          {this.renderInput("rooms", "Rooms")}
          {this.renderButton("Save Property")}
        </form>
      </section>
    );
  }
}

export default PropertyForm;
