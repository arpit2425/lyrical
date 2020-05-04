import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { BrowserRouter as Router, Route, hashHistroy } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import SongList from "./components/SongList";
import App from "./components/App";
const client = new ApolloClient({});
const Root = () => {
  console.log(hashHistroy);
  return (
    <ApolloProvider client={client}>
      <Router histroy={hashHistroy}>
        <Route path="/" component={App}>
          <SongList />
        </Route>
      </Router>
      {/* <SongList /> */}
      {/* <Router>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
        </Route>
      </Router> */}
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
