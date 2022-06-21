import React, { useState } from 'react';
import Chevron from './Chevron';

const Accordions = ({ question }) => {
	// States
	const [text, setText] = useState(false);
	const [rotate, setRotate] = useState('option__chevron');

	const toggleAccordion = () => {
		setText(!text);

		setRotate(!text === 'open' ? 'option__chevron' : 'option__chevron rotate');
	};

	const getChoiceValue = (e)=> {
		e.preventDefault;
		let textValue = e.target.firstChild;
		console.log(textValue);
	}


	return (
		<div className="option">
			<div className={`option__toggle ${!text} }`} onClick={toggleAccordion}>
				<h2 className="option--title">{question.question}</h2>
				<div className={`${rotate}`}>
					<Chevron />
				</div>
			</div>

			{text && (
				<div className="option__items">
					<div onClick={getChoiceValue}>
						<input type="radio" name="service" id="1" />
						<label htmlFor="1" className="option__inner">
							<h4 className="option--subhead">{question.option1}</h4>
							<p className="subtext">{question.option1Details}</p>
						</label>
					</div>
					<div  onClick={getChoiceValue}>
						<input type="radio" name="service" id="2" />
						<label htmlFor="2" className="option__inner">
							<h4 className="option--subhead">{question.option2}</h4>
							<p className="subtext">{question.option2Details}</p>
						</label>
					</div>

					<div onClick={getChoiceValue}>
						<input type="radio" name="service" id="3" />
						<label htmlFor="3" className="option__inner">
							<h4 className="option--subhead">{question.option3}</h4>
							<p className="subtext">{question.option3Details}</p>
						</label>
					</div>
				</div>
			)}
		</div>
	);
};

export default Accordions;
