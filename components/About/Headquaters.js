import React from 'react';
import Image from 'next/image';
import { Countries } from '../Data';

const Headquaters = () => {
	return (
		<section className="headquaters">
			<h4 className='headquaters--title'>Our headquarters</h4>
			<div className="headquaters__flex">
				{Countries.map((country) => {
					return (
						<div className="headquaters__items" key={country.id}>
							<Image src={country.image} alt={country.alt} width={country.width} height={country.height} />
							<h3 className="headquaters--country">{country.country}</h3>
							<ul>
								<li className="headquaters--address">{country.address1}</li>
								<li className="headquaters--address">{country.city}</li>
								<li className="headquaters--address">{country.postcode}</li>
								<li className="headquaters--address">{country.number}</li>
							</ul>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Headquaters;
