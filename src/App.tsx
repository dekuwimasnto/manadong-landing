import React from 'react';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <LandingPage />
      <Footer/>
    </div>
  );
}

export default App;
