import React from 'react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material';
import {Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: theme.palette.primary.main,
  },
}));

const Header = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <NavigationMenu></NavigationMenu>
      <Typography
          component="h3"
          variant="h3"
          color="textPrimary"
          className='py-4'>
            {t('welcome')}
        </Typography>
      <LanguageSwitcher></LanguageSwitcher>
    </div>
  );
}

export default Header;
