// import "./App.css";
import React from "react";
import Benefits from "./Components/Benefits/Benefits.js";
import ChoseUs from "./Components/ChoseUs/ChoseUs.js";
import Container from "./Components/Container/Container.js";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import OurService from "./Components/OurService/OurService";

function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <OurService />
      <ChoseUs />
      <Benefits />
    </Container>
  );
}

export default App;
