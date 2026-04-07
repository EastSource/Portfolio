import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Games from './components/Games';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-white selection:bg-accent selection:text-background">
      <Header />
      <main>
        <Hero />
        <Profile />
        <Skills />
        <Games />
      </main>
      <Footer />
    </div>
  );
}

export default App;
