import React from 'react';
import BenefitsCards from './BenefitsCards';

const Benefits = () => {
	return (
		<section className="benefits">
			<div className="benefits__content">
				<div className="benefits__content-inner">
					<h2 className="benefits--subhead">Why choose us?</h2>
					<p className="benefits--desc">A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
				</div>
				<BenefitsCards />
			</div>
		</section>
	);
};

export default Benefits;
