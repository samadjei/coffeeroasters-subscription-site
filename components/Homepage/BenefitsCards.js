import React from 'react';
import Image from 'next/image';
import { Benefits } from '../Data';

const BenefitsCards = () => {
	return (
		<div className="benefits__card">
			{Benefits.map((benefit) => {
				return (
					<div className="benefits__card-items" key={benefit.id}>
						<Image src={benefit.image} alt={benefit.alt} width={benefit.width} height={benefit.height} />
						<div className="benefits__card-content">
							<h4 className="benefits__card-subhead">{benefit.title}</h4>
							<p className="benefits__card-desc">{benefit.desc}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default BenefitsCards;
