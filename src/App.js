import './App.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header/Header';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import lightTheme, { darkTheme } from "./theme";
import { Switch, AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  const { t } = useTranslation();

  // The 'checked' state is for the status of Switch component
  const [checked, setChecked] = React.useState(false);
  // The 'newtheme' state tells if the new theme (i.e, dark theme)
  // is to be applied or not.
  const [newtheme, setTheme] = React.useState(false);
  const changeTheme = () => {
      setTheme(!newtheme);
      setChecked(!checked);
  }
  // Conditional - if newtheme is set to true
  // then set appliedTheme to dark
  const appliedTheme = createTheme(newtheme ? darkTheme : lightTheme);

  return (
    <>
      <ThemeProvider theme={appliedTheme}>
        <CssBaseline /> 
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
              <Switch
                checked={checked}
                onChange={() => {
                changeTheme();
                }}
                style={{color: appliedTheme.palette.secondary.icons,}}/>
            </Toolbar>
        </AppBar>
        <Header></Header>

        <Typography
          component="h1"
          variant="h1"
          align="center"
          color="textPrimary"
          className='py-4'>
            {t('landingPage')}
        </Typography>

        <Typography
          component="h3"
          variant="h3"
          align="center"
          color="textPrimary"
          className='py-8'>
            {t('aboutUsContent')}
        </Typography>

        <footer className="App-footer">
          <Typography
            component="p"
            variant="p"
            align="center"
            color="textPrimary">
              {t('allRightsReserved')}
          </Typography>
        </footer>
      </ThemeProvider>
    </>
  );
}

export default App;
