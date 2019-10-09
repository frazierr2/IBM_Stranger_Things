import React, { Component } from "react";
import Header from "./Components/Header";
import Inspiration from "./Components/Inspiration";

// import * as English from "./Data/en_US.json";
// import * as PigLatin from "./Data/la_PG.json";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Importing Local CSS
import "./App.css";

// Redux Import
import { connect } from "react-redux";
import { updateLanguage } from "./Actions/languageActions";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: this.props.store
    };
    console.log("STATE: ", this.state.language);
    // this.english = this.props.eng[0];
    // this.pigLatin = this.props.pig[0];
    // this.languageToUse = this.props.eng[0];
  }

  render() {
    // console.log("STORE: ", this.props.language);
    return (
      <div className="App">
        <Header />
        {/* <Header title={this.state.english.heading} /> */}
        <Inspiration />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: state
});

const mapActionsToProps = {
  onUpdateLanguage: updateLanguage
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
