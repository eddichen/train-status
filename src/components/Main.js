import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Search from "./Search";
import SearchResults from "./SearchResults";
import NotFoundPage from "./NotFoundPage";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
    margin: 0;
    color: #132968;
    background-color: #f1f2f6;
  }

  .main {
    padding: 0 15px;
  }

  label,
  input {
    font-size: 1em;
  }

  input {
    padding: 10px;
    border: none;
    border-radius: 4px;
    width: 100%;
  }

  .form__field {
    margin-bottom: .5rem;
  }

  .visuallyhidden { 
    position: absolute; 
    overflow: hidden; 
    clip: rect(0 0 0 0); 
    height: 1px; width: 1px; 
    margin: -1px; padding: 0; border: 0; 
  }
`;

class Main extends Component {
  render() {
    return (
      <div className="main">
        <GlobalStyle />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Search {...props} {...this.props} />}
          />
          <Route
            path="/trains"
            render={props => <SearchResults {...props} {...this.props} />}
          />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default Main;
