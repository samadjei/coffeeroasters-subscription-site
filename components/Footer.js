import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__content">
				<Link href="/">
					<a>
						<Image src="/assets/shared/desktop/logoWhite.svg" alt="Coffee Roaster Logo" width={236} height={26} />
					</a>
				</Link>
				<div className="footer__links">
					<Link href="/">
						<a className="footer--items">Home</a>
					</Link>
					<Link href="/About">
						<a className="footer--items">About Us</a>
					</Link>
					<Link href="/Subscribe">
						<a className="footer--items">Create a Plan</a>
					</Link>
				</div>
				<div className="footer__socials">
					<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
						<Image src="/assets/shared/desktop/icon-facebook.svg" alt="Facebook" width={24} height={24} />
					</a>
					<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
						<Image src="/assets/shared/desktop/icon-twitter.svg" alt="Twitter" width={24} height={19.5} />
					</a>
					<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
						<Image src="/assets/shared/desktop/icon-instagram.svg" alt="Instagram" width={24} height={24} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
