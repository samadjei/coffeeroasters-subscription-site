import React from "react";
import SharedHero from "../components/Shared/SharedHero";
import Accordion from "../components/Subscribe/Accordion";
import OrderSummary from "../components/Subscribe/OrderSummary";
import Steps from "../components/Subscribe/Steps";
import { useState } from "react";
import { Questions } from "../components/Data";
import AccordionItems from "../components/Subscribe/AccordionItems";
import Selects from "../components/Subscribe/Selects"
const Subscribe = () => {

const [ options ] = useState(Questions);
// console.log(options[0])

  return (
    <main className="container">
      <SharedHero
        class="subscribe"
        title="Create a plan"
        desc="Build a subscription plan that best fits your needs. We offer an assortment of the best 
  artisan coffees from around the globe delivered fresh to your door."
      />

      <Steps />
      <Accordion />
      <Selects option={options[0]}/>
      <Selects option={options[1]}/>
      <Selects option={options[2]}/>
      <Selects option={options[3]}/>
      <OrderSummary />
    </main>
  );
};

export default Subscribe;
