import "./App.scss";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Main from "./pages/Main/Main";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/ContactPage" component={ContactPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
