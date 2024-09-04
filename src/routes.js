import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import SingleProjectPage from "./pages/SingleProjectPage/SingleProjectPage";
import ResumePage from "./pages/ResumePage/ResumePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default (
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/projects/:paramFilter?/:paramSearch?"
          component={ProjectsPage}
        />
        <Route path="/project/:paramItemKey" component={SingleProjectPage} />
        <Route path="/resume" component={ResumePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </App>
  </Router>
);
