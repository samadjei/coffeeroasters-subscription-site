import React from 'react';
import WorkChoices from './WorkChoices';
import Link from 'next/link';
import Button from '../Button';

const Works = (props) => {
	return (
		<div className="work">
			<div className="work__content">
				<h4 className="work--subhead">How it Works</h4>
				<div className="work__lines">
					<div className="work__circle"></div>
					<div className={`work__circle line2 ${props.class}`}></div>
					<div className="work__circle line3"></div>
					<hr className="work__line" />
				</div>
				<WorkChoices className="homePage" />
				<div className="work__btn">
					<Link href="/">
						<Button children="Create a plan" className="btn" buttonStyle="btn--primary" buttonSize="btn--desktop" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Works;
