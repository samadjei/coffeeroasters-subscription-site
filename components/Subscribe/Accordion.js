import React, { useState } from 'react';
import { Questions } from '../Data';
import Select from './Select';
import Accordions from './Accordions';
const Accordion = () => {
	const [questions, setQuestions] = useState([...Questions]);

	const toggleQuestion = (index) => {
		// map thorugh each question and get its index
		setQuestions(
			questions.map((question, i) => {
				if (i === index) {
					question.open = !question.open;
				} else {
					// toggled the value to true or false
					question.open = false;
				}
				return question;
			})
		);
	};

	return (
		<div className="questions">
				<Select />
			<div className="questions__selection">
				{questions.map((question, i) => (
					<div key={question.id}>
						<Accordions question={question} index={i} toggleQuestion={toggleQuestion} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Accordion;
