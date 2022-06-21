import Image from 'next/image';
import Link from 'next/link';
import React, { Component } from 'react';

class Nav extends Component {
	state = { clicked: false };
	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};
	render() {
		return (
			<nav className="navbar container">
				<div className="navbar__logo">
					<Link href="/">
						<a>
							<Image src="/assets/shared/desktop/logo.svg" alt="Coffee Roaster Logo" width={236} height={26} />
						</a>
					</Link>
				</div>
				<div className="menu-icon" onClick={this.handleClick}>
					<i className={this.state.clicked ? 'fas fa-times active' : 'fas fa-bars'}></i>
				</div>
				<ul className={this.state.clicked ? 'navbar__links active' : 'navbar__links'}>
					<li>
						<Link href="/">
							<a className="navbar--items">Home</a>
						</Link>
					</li>
					<li>
						<Link href="/About">
							<a className="navbar--items">About Us</a>
						</Link>
					</li>
					<li>
						<Link href="/Subscribe">
							<a className="navbar--items">Create a Plan</a>
						</Link>
					</li>
				</ul>
				
			</nav>
		);
	}
}

export default Nav;
