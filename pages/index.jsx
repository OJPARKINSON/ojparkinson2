import Head from 'next/head';
import React from 'react';
import ApolloClient from 'apollo-boost';
import fetch from 'node-fetch';
import { ApolloProvider } from '@apollo/react-hooks';

import Header from '../components/header';
import Calendar from '../components/calender';
import Section from '../components/section';
import About from '../components/about';
import Contact from '../components/contact';
import Portfolio from '../components/portfolio';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: (operation) => {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${process.env.KEY}`,
      },
    });
  },
  fetch,
});

const Home = () => (
  <div className="container">
    <Head>
      <title>Oliver Parkinson</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400&display=swap" rel="stylesheet" />
    </Head>

    <Header />

    <Section label="About" border={false}>
      <About />
    </Section>

    <div className="Spacer" />

    <Section label="Portfolio" border={false}>
      <Portfolio />
    </Section>

    <div className="Spacer" />

    <Section label="Calander" border={false}>
      <ApolloProvider client={client}>
        <Calendar />
      </ApolloProvider>
    </Section>

    <div className="Spacer" />

    <Section label="Contact" border={false}>
      <Contact />
    </Section>

  </div>
);


export default Home;
