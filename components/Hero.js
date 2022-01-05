import React from 'react';
import Link from 'next/link';

import Button from './Button';

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero__content ">
				<h1>Great coffee made simple.</h1>
				<p className="hero--desc">Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
				<Link href="/Subscribe">
					<Button children="Create a plan" className="btn" buttonStyle="btn--primary" buttonSize="btn--desktop" />
				</Link>
			</div>
		</div>
	);
};

export default Hero;
