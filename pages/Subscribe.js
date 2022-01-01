import React from 'react';
import SharedHero from '../components/Shared/SharedHero';
import Accordion from '../components/Subscribe/Accordion';
import Steps from '../components/Subscribe/Steps';

const Subscribe = () => {
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
		</main>
	);
};

export default Subscribe;
