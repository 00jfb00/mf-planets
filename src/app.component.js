import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { KBody, KSide } from "ava30-frontend-componentslib";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions } from "./redux";
import PlanetPage from "./pages/planets-page.component.js";

class App extends Component {
  render() {
    return (
      <Fragment>
        <KSide width={205}>SIDEBAR</KSide>
        <KBody height={56} width={205}>
          <BrowserRouter>
            <Route path="/planets" exact component={PlanetPage} />
            <Route path="/planets/:id" exact component={PlanetPage} />
          </BrowserRouter>
        </KBody>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  planets: state.astros.planets
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(App);
