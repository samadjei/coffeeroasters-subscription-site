import React from 'react';
import WorkChoices from '../Shared/WorkChoices';

const Steps = () => {
	return (
		<div className="steps">
			<div className="steps__bg">
				<div className="steps__lines">
					<div className="steps__circle"></div>
					<div className="steps__circle line2"></div>
					<div className="steps__circle line3"></div>
					<hr className="steps__line" />
				</div>
				<WorkChoices class="subscribe" />
			</div>
		</div>
	);
};

export default Steps;
