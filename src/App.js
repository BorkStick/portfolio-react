import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Projects} path="/projects" />
          <Route component={Contact} path="/contact" />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
