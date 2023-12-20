import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '@mui/material';
import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const theme = useTheme();
  const classes = useStyles(theme);

  const changeLanguage = (lng) => {
    console.log('Change to ' + lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div className={classes.root}>
      <Link
      component="button"
      variant="body2"
      style={{ color: theme.palette.text.primary }}
      onClick={() => changeLanguage('en')}>
        |EN
      </Link>
      <Link
      component="button"
      variant="body2"
      style={{ color: theme.palette.text.primary }}
      onClick={() => changeLanguage('vn')}>
        |VN|
      </Link>
    </div>
  );
}

export default LanguageSwitcher;
