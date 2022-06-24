import React, { forwardRef } from 'react';

const STYLES = ['btn--primary', 'btn--secondary', 'btn--tertiary'];

const SIZES = ['btn--desktop', 'btn--tablet', 'btn--mobile', 'btn--checkout'];

const Button = forwardRef(({ onClick, href, buttonStyle, buttonSize, type, children }, ref) => {
	const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
	return (
		<button className={`btn ${checkButtonStyle} ${checkButtonSize}`} href={href} type={type} onClick={onClick} ref={ref}>
			{children}
		</button>
	);
});

Button.displayName = 'Button';


export default Button;
