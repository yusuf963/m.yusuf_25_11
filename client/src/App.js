import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './page/homePage';
import GarmentCard from './components/garment-card';
import Nav from './components/nav';
import Footer from './components/footer';

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/garments' component={GarmentCard} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
