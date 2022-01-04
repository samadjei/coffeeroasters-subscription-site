import React, { useState } from 'react';
import { Questions } from '../Data';
import Accordions from './Accordions';
import Select from './Select';
const Accordion = () => {
	const [questions, setQuestions] = useState([...Questions]);

	const toggleQuestions = (index) => {
		// map thorugh each question and get its index
		setQuestions(
			questions.map((option, i) => {
				if (i === index) {
					option.open = !option.open;
				} else {
					// toggled the value to true or false
					option.open = false;
				}
				return option;
			})
		);
	};

	return (
		<div className='questions'>
			<Select />
			<div className="options">
				{Questions.map((option, i) => (
					<div>
						<Accordions option={option} index={i} toggleQuestions={toggleQuestions} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Accordion;
