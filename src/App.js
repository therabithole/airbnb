import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import NavBar from "./client/components/common/navBar";

import NotFound from "./client/components/notFound";
import Properties from "./client/components/Properties";
import Bookings from "./client/components/bookings";
import Customers from "./client/components/customers";
import PropertyForm from "./client/components/propertyForm";
import LoginForm from "./client/components/loginForm";
import RegisterForm from "./client/components/registerForm";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/properties/:id" component={PropertyForm} />
          <Route path="/properties" component={Properties}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/bookings" component={Bookings}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/Properties" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
