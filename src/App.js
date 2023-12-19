import './App.css';
import React from 'react';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <LanguageSwitcher></LanguageSwitcher>
      <NavigationMenu></NavigationMenu>
      <header className="App-header">
        <h1>{t('welcome')}</h1>
      </header>

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
