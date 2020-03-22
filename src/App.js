import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Comercios from "./components/Comercios";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <main role="main">
          <div style={{ height: 4000 }}>
            <div className="region region-content">
              <div className="block block-system clearfix"></div>
            </div>
            <Switch>
              <Route exact path="/" component={Comercios} />
            </Switch>
          </div>
        </main>
        <Footer />
      </Provider>
    </Router>
  );
}

export default App;
