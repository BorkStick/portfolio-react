import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./components/Projects/Projects";
import Nav from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route component={Home} exact path="/"  />
          <Route component={About} path="/about" />
          <Route component={ProjectsPage} exact path="/projects" />
          <Route component={Contact} path="/contact" />
          <Route
            path="/projects/:slug"
            exact
            render={(props) => (<Projects slug={props.match.params.slug} />)}
          />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
