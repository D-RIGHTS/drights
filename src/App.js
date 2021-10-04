import React from 'react';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Navigation from "./components/header/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
