import React from 'react';
import Link from 'next/link';

const Header = () => {
	return (
		<header>
			<h1>Oliver Parkinson</h1>
			<ul>
				<li>
					<Link href='/'>
						<a>PORTFOLIO</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>BLOG</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>ABOUT</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a>CONTACT</a>
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
