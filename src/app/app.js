import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Routes from './Routes';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="React.js Boilerplate"
    >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Header >
      <Navigation />
    </Header>
    <Routes />
    <Footer />
  </div>
);

export default App;