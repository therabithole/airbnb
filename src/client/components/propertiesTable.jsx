import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/Like";

import Table from "./common/table";

class PropertiesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (property) => (
        <Link to={`/properties/${property._id}`}> {property.title} </Link>
      ),
    },
    { path: "amenity.name", label: "Amenity" },
    { path: "rooms", label: "Rooms" },
    { path: "price", label: "Price" },

    {
      key: "like",
      content: (property) => (
        <Like
          liked={property.liked}
          onClick={() => this.props.onLike(property)}
        />
      ),
    },
    {
      key: "delete",
      content: (property) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(property)}
        >
          Delete Property
        </button>
      ),
    },
  ];

  render() {
    const { properties, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={properties}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default PropertiesTable;
