import './App.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header/Header';

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <Header></Header>

      <div className="hero-section">
        <h1>{t('landingPage')}</h1>
        <p>{t('aboutUsContent')}</p>
      </div>

      <section className="App-section">
        <h2>{t('aboutUs')}</h2>
        <p>{t('aboutUsContent')}</p>
      </section>

      <footer className="App-footer">
        <p>{t('allRightsReserved')}</p>
      </footer>
    </div>
  );
}

export default App;
