import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import OrderPage from './components/OrderPage';
import OutletG from './components/OutletGrab';
import OutletS from './components/OutletShopee';
import OutletJ from './components/OutletGojek';
import About from './components/About';

const App: React.FC = () => {
  return (
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path='/outletg' element={<OutletG/>}/>
              <Route path='/outlets' element={<OutletS/>}/>
              <Route path='/outletj' element={<OutletJ/>}/>
              <Route path='/about' element={<About/>}/>
          </Routes>
          <Footer />
      </Router>
  );
};

export default App;
