import React from 'react';
import { Works } from '../Data';

const WorkChoices = (props) => {
	return (
		<div className="work__choices">
			{Works.map((work) => {
				return (
					<div className="work__choices-items" key={work.id}>
						<h1 className={`work--number ${props.class}`}>{work.number}</h1>
						<h3 className={`work--subhead ${props.class}`}>{work.title}</h3>
						<p className={`work--desc ${props.class}`}>{work.desc}</p>
					</div>
				);
			})}
		</div>
	);
};

export default WorkChoices;
