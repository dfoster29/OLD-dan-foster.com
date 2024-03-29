import React, { Component } from "react";
import Home from "./components/Home";
// import BioCard from "./components/BioCard";
// import ContactCard from "./components/ContactCard";
// import PortfolioCard from "./components/PortfolioCard";
import Navbar from "./components/Navbar";
// import Resume from "./components/Resume";
import { Route, HashRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Navbar />
          <div>
            <Route exact path="/" component={Home} />
            {/* <Route path="/about" component={BioCard} />
            <Route path="/contact" component={ContactCard} />
            <Route path="/projects" component={PortfolioCard} /> */}
            {/* <Route path="/resume" component={Resume} /> */}
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
