import React, { Component } from "react";
import { KButton } from "ava30-frontend-componentslib";
import { withRouter } from "react-router-dom";

class PlanetPage extends Component {
  render() {
    return (
      <div>
        <span>Planetas {this.props.match.params.id}</span>
        <br />
        <KButton
          title="Com ID"
          onClick={() => this.props.history.push("/planets/1")}
        />
        <br />
        <KButton
          title="Sem ID"
          onClick={() => this.props.history.push("/planets")}
        />
        <br />
        <KButton
          title="Ir para PESSOAS"
          onClick={() => this.props.history.push("/people")}
        />
      </div>
    );
  }
}

export default withRouter(PlanetPage);
