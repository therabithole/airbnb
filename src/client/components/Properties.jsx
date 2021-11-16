import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  getProperties,
  deleteProperty,
} from "../../node/services/fakePropertyService";
import { getAmenities } from "../../node/services/fakeAmenityService";

// components:
import ListGroup from "./common/ListGroup";

// common

import Pagination from "./common/pagination";

//utils
import { paginate } from "./utils/paginate";
import PropertiesTable from "./propertiesTable";

// lodash for sorting
import _ from "lodash";
import SearchBox from "./common/searchbox";

class Properties extends React.Component {
  state = {
    properties: [],
    amenities: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedAmenity: null,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const amenities = [{ _id: "", name: "All Amenities" }, ...getAmenities()];
    this.setState({ properties: getProperties(), amenities });
  }
  // methods
  handleDelete = (property) => {
    const properties = this.state.properties.filter(
      (p) => p._id !== property._id
    );
    this.setState({ properties: properties });

    deleteProperty(property._id);
  };

  // methods

  handleLike = (property) => {
    const properties = [...this.state.properties];
    // find the index of selected property

    const index = properties.indexOf(property);
    properties[index] = { ...properties[index] };
    properties[index].liked = !properties[index].liked;
    this.setState({ properties });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleAmenitySelect = (amenity) => {
    this.setState({
      selectedAmenity: amenity,
      searchQuery: "",
      currentPage: 1,
    });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleSearch = (query) => {
    console.log("searching", query);
    this.setState({
      searchQuery: query,
      selectedAmenity: null,
      currentPage: 1,
    });
  };
  // render

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedAmenity,
      searchQuery,
      properties: allProperties,
    } = this.state;

    // Filter + Search

    let filtered = allProperties;
    if (searchQuery)
      filtered = allProperties.filter((p) =>
        p.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedAmenity && selectedAmenity._id)
      filtered = allProperties.filter(
        (p) => p.amenity._id === selectedAmenity._id
      );

    // Second step - Sort
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const properties = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: properties };
  };

  render() {
    const { length: count } = this.state.properties;

    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count == 0) return <p> There are no properties in the database</p>;

    const { totalCount, data: properties } = this.getPagedData();

    // return
    return (
      <section>
        <div className="row">
          <div className="col-2">
            <ListGroup
              items={this.state.amenities}
              selectedItem={this.state.selectedAmenity}
              onItemSelect={this.handleAmenitySelect}
            />
          </div>
          <div className="col">
            <Link
              to="/properties/new"
              className="btn btn-primary"
              style={{ marginBottom: 20, marginTop: 15 }}
            >
              New Property
            </Link>
            <p> Showing {totalCount} properties in the database</p>
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
            <PropertiesTable
              properties={properties}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Properties;
