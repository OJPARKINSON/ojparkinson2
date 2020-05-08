import Head from 'next/head';
import React from 'react';
import ApolloClient from 'apollo-boost';
import fetch from 'node-fetch';
import { ApolloProvider } from '@apollo/react-hooks';

import Header from '../components/header';
import Calendar from '../components/calender';
import Section from '../components/section';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.KEY}`
      }
    })
  },
  fetch
});

const Home = () => {
  console.log(process.env.REACT_APP_TOKEN)
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
      <div className="Spacer"></div>
      <Section label="Calander" border={false}>
        <ApolloProvider client={client}>
          <Calendar/>
        </ApolloProvider>
      </Section>
			<main />
		</div>
	);
};

export default Home;
