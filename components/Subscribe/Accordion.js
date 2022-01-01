import React, { useState } from 'react';
import { Questions } from '../Data';
import Accordions from './Accordions';
const Accordion = () => {
	const [questions, setQuestions] = useState([{ ...Questions }]);

	// console.log(...Questions);
	return (
		<div className="question">
			<h4>Hey there</h4>
			{Questions.map((question, i) => {
				return (
					<div className="question__items" key={question.id}>
						<Accordions question={question} index={i} />
					</div>
				);
			})}
		</div>
	);
};

export default Accordion;
