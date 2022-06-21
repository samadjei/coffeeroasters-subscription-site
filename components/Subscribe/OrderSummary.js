import React from 'react';

const OrderSummary = ({summary}) => {
	return (
		<div className="summary">
			<span>Order Summary</span>
			<p>“I drink coffee _____, with a _____ type of bean. _____ ground ala _____, sent to me _____.”</p>
		</div>
	);
};

export default OrderSummary;
