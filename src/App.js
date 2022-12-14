import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import Top from "./components/Top";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import Error from "./components/Error";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Watchlist />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
          <Route path="/top">
            <Top />
          </Route>
          <Route component={Error} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
