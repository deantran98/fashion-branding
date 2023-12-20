import React from 'react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between h-24 px-4 bg-[#141414]">
      <NavigationMenu></NavigationMenu>
      <h1 className='self-center text-xl text-[#E1E1E1]'>{t('welcome')}</h1>
      <LanguageSwitcher></LanguageSwitcher>
    </div>
  );
}

export default Header;
