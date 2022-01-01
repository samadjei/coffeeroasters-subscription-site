import React from 'react';

const Accordions = ({ question, index }) => {
	console.log(question);
	return (
		<div className={'option ' + (question.open ? 'open' : '')} key={index}>
			<h2 className="question">{question.question}</h2>
			<div className="option__items">
				<div className="option">
					{question.option1}
					{question.option1Details}
				</div>
				<div className="option">
					{question.option2}
					{question.option2Details}
				</div>
				<div className="option">
					{question.option3}
					{question.option3Details}
				</div>
			</div>
		</div>
	);
};

export default Accordions;
