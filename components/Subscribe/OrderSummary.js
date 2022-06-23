import React from 'react';

const OrderSummary = ({drink, type, quantity, grind, frequency}) => {
	return (
		<div className="summary">
			<span className='summary--title'>Order Summary</span>
			<p className='summary--details'>“I drink coffee <span className='summary--options'>{drink}</span>, with a <span className='summary--options'>{type}</span> type of bean. <span className='summary--options'>{quantity}</span> ground ala <span className='summary--options'>{grind}</span> , sent to me <span className='summary--options'>{frequency}</span> .”</p>
		</div>
	);
};

export default OrderSummary;
