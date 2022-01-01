import React from 'react';
import Hero from '../components/Hero';
import Benefits from '../components/Homepage/Benefits';
import Collection from '../components/Homepage/Collection';
import Works from '../components/Shared/Works';

const Homepage = () => {
	return (
		<main className="container">
			<Hero />
			<Collection />
			<Benefits />
			<Works class="home" />
		</main>
	);
};

export default Homepage;
