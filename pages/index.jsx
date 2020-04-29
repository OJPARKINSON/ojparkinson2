import Head from 'next/head';
import React from 'react';

import Header from '../components/header';
import Section from '../components/section';

const Home = () => {
	return (
		<div className="container">
			<Head>
				<title>Oliver Parkinson</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700&display=swap" rel="stylesheet" />
			</Head>

			<Header />

      <Section label="Portfolio" border={false}>
        <img className="portfolioImage" src="/Bitmap.png"/>
      </Section>
			<main />
		</div>
	);
};

export default Home;
