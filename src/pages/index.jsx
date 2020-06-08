import React from 'react';
import ApolloClient from 'apollo-boost';
import fetch from 'node-fetch';
import { ApolloProvider } from '@apollo/react-hooks';
import '../components/layout.css';

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
        Authorization: `Bearer ${process.env.GATSBY_KEY}`,
      },
    });
  },
  fetch,
});

const Home = () => (
  <div className="container">
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
