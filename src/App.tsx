import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import OrderPage from './components/OrderPage';
import OutletG from './components/OutletGrab';

const App: React.FC = () => {
  return (
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path='/outlet' element={<OutletG/>}/>
          </Routes>
          <Footer />
      </Router>
  );
};

export default App;
