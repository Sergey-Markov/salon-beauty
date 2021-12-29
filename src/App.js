import logo from "./logo.svg";
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
      <p>My App</p>
    </Container>
  );
}

export default App;
