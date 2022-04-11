// import "./App.css";
import React from "react";
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
    </Container>
  );
}

export default App;
