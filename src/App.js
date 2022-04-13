// import "./App.css";
import React from "react";
import Benefits from "./Components/Benefits/Benefits.js";
import ChoseUs from "./Components/ChoseUs/ChoseUs.js";
import Container from "./Components/Container/Container.js";
import DiscountsBlock from "./Components/DiscountsBlock/DiscountsBlock.js";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import OurService from "./Components/OurService/OurService";
import Portfolio from "./Components/Portfolio/Portfolio.js";
import WelcomeCard from "./Components/WelcomeCard/WelcomeCard.js";

function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <OurService />
      <ChoseUs />
      <Benefits />
      <DiscountsBlock />
      <WelcomeCard />
      <Portfolio />
    </Container>
  );
}

export default App;
