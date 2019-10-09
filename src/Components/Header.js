import React, { Component } from "react";
import "./Header.css";
import Navbar from "./Navbar";

// Bootstrap Imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

// Redux Imports
import { connect } from "react-redux";
import { updateLanguage } from "../Actions/languageActions";

class Header extends Component {
  constructor(props) {
    super(props);

    this.onUpdateLanguage = this.onUpdateLanguage.bind(this);

    this.state = {
      title: "English"
    };
    this.english = this.props.eng[0];
    this.pigLatin = this.props.pig[0];
    this.languageToUse = this.props.eng[0];
  }

  onUpdateLanguage(e) {
    this.props.onUpdateLanguage(e.target.textContent);
    if (e.target.textContent === "English") {
      this.languageToUse = this.english;
      this.setState({ title: e.target.textContent });
      //   this.setState({ language: "English" });
    } else {
      this.languageToUse = this.pigLatin;
      this.setState({ title: e.target.textContent });
      //   this.setState({ language: "Pig Latin" });
    }
  }
  render() {
    return (
      <Container fluid id="header-container">
        <Row>
          <Col id="company-title">Flix by IBM - An RTP Original</Col>
          <Col id="language-container">
            <DropdownButton id="language-button" title={this.state.title}>
              <Dropdown.Item as="button" onClick={this.onUpdateLanguage}>
                English
              </Dropdown.Item>
              <Dropdown.Item as="button" onClick={this.onUpdateLanguage}>
                Pig Latin
              </Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <Row className="justify-content-end navbar-row">
          <Navbar />
        </Row>
        <Row id="show-title" className="justify-content-center">
          <h1>{this.languageToUse.heading}</h1>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  language: state.language,
  eng: state.eng,
  pig: state.pig
});

const mapActionsToProps = {
  onUpdateLanguage: updateLanguage
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Header);
