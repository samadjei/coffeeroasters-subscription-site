import React from 'react';

const Accordions = ({ option, index, toggleQuestions }) => {
	return (
		<div className={'option ' + (option.open ? 'open' : '')} key={index} onClick={() => toggleQuestions(index)}>
			<h2 className="option--title">{option.question}</h2>
			<div className="option__items">
				<div className="option__inner">
					<h4 className="option--subhead">{option.option1}</h4>
					<p>{option.option1Details}</p>
				</div>
				<div className="option__inner">
					<h4 className="option--subhead">{option.option2}</h4>
					<p>{option.option2Details}</p>
				</div>
				<div className="option__inner">
					<h4 className="option--subhead">{option.option3}</h4>
					<p>{option.option3Details}</p>
				</div>
			</div>
		</div>
	);
};

export default Accordions;
