import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";


const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to</p>
        <h1>Friends App Home Page</h1>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Friends App About Page</h1>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Friends Home Page</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Friends App Contact Page</h1>
      </section>
    </>
  );
};



function App() {
  return (
    
       <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
    
  );
}

export default App;
