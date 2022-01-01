import React from 'react';

const STYLES = ['btn--primary', 'btn--secondary', 'btn--tertiary'];

const SIZES = ['btn--desktop', 'btn--tablet', 'btn--mobile'];

const Button = React.forwardRef(({ onClick, href, buttonStyle, buttonSize, type, children }, ref) => {
	const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
	return (
		<button className={`btn ${checkButtonStyle} ${checkButtonSize}`} href={href} type={type} onClick={onClick} ref={ref}>
			{children}
		</button>
	);
});

export default Button;
