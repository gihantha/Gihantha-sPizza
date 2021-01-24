import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import {productData, productData2} from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='What would you like?' data={productData}/>
      <Feature />
      <Products heading='Melt in your mouth choices' data={productData2}/>
      <Footer />
    </Router>
  );
}

export default App;
