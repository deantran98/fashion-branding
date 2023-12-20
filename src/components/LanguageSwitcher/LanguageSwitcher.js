import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '@mui/material';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    console.log('Change to ' + lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-1">
      <Link
      component="button"
      variant="body2"
      style={{ color: '#E1E1E1' }}
      onClick={() => changeLanguage('en')}>
        EN
      </Link>
      <Link
      component="button"
      variant="body2"
      style={{ color: '#E1E1E1' }}
      onClick={() => changeLanguage('vn')}>
        VN
      </Link>
    </div>
  );
}

export default LanguageSwitcher;
