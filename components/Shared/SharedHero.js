import React from 'react';

const SharedHero = (props) => {
	return (
		<div className="sharedHero">
			<div className="sharedHero__content">
				<h2 className="sharedHero--title">{props.title}</h2>
				<p className="sharedHero--desc">{props.desc}</p>
			</div>
		</div>
	);
};

export default SharedHero;
