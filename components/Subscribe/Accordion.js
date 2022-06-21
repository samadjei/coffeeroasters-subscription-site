import React from 'react';
import { Questions } from '../Data';

import Select from './Select';
import Accordions from './Accordions';
const Accordion = () => {
	return (
		<div className="questions">
			<Select />
			<div className="questions__selection">
				{Questions.map((question) => (
					<div key={question.id}>
						<Accordions question={question}/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Accordion;
