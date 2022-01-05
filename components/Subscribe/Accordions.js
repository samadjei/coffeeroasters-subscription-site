import React from 'react';

const Accordions = ({ question, index, toggleQuestion }) => {
	return (
		<div className={'option ' + (question.open ? 'open' : '')} key={index} onClick={() => toggleQuestion(index)}>
			<h2 className="option--title">{question.question}</h2>
			<div className="option__items">
				<div className="option__inner">
					<h4 className="option--subhead">{question.option1}</h4>
					<p>{question.option1Details}</p>
				</div>
				<div className="option__inner">
					<h4 className="option--subhead">{question.option2}</h4>
					<p>{question.option2Details}</p>
				</div>
				<div className="option__inner">
					<h4 className="option--subhead">{question.option3}</h4>
					<p>{question.option3Details}</p>
				</div>
			</div>
		</div>
	);
};

export default Accordions;
