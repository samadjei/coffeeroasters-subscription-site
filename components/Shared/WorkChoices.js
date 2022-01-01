import React from 'react';
import { Works } from '../Data';

const WorkChoices = () => {
	return (
		<div className="work__choices">
			{Works.map((work) => {
				return (
					<div className="work__choices-items" key={work.id}>
						<h1 className="work--number">{work.number}</h1>
						<h3 className="work--subhead">{work.title}</h3>
						<p>{work.desc}</p>
					</div>
				);
			})}
		</div>
	);
};

export default WorkChoices;
