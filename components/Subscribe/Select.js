import React from 'react';
import { Choices } from '../Data';

const Select = () => {
	return (
		<ul className="select">
			{Choices.map((choice) => {
				return (
					<div key={choice.id}>
						<li className="select__content">
							<h4 className="select__title">
								<span className="select--number">{choice.number}</span> {choice.title}
							</h4>
						</li>
					</div>
				);
			})}
		</ul>
	);
};

export default Select;
