import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '@mui/material';

function LanguageSwitcher() {
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
      onClick={() => changeLanguage('en')}>
        EN
      </Link>
      <Link
      component="button"
      variant="body2"
      onClick={() => changeLanguage('vn')}>
        VN
      </Link>
      {/* <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('vn')}>Vietnam</button> */}
      {/* Add more language buttons as needed */}
    </div>
  );
}

export default LanguageSwitcher;
