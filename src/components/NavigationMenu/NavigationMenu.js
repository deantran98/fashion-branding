import React from 'react';
import { List, ListItem, Drawer, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '8rem',
    height: '100vw',
    backgroundColor: theme.palette.primary.main,
  },
}));

const NavigationMenu = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const classes = useStyles(theme);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({...state, [side]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.root}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemText primary={t('home')} style={{ color: theme.palette.text.primary }}/>
        </ListItem>
        <ListItem button>
          <ListItemText primary={t('brands')} style={{ color: theme.palette.text.primary }}/>
        </ListItem>
        <ListItem button>
          <ListItemText primary={t('about')} style={{ color: theme.palette.text.primary }}/>
        </ListItem>
        <ListItem button>
          <ListItemText primary={t('contact')} style={{ color: theme.palette.text.primary }}/>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className='flex'>
      <button onClick={toggleDrawer('left', true)}>
        <Typography
          component="h3"
          variant="h3"
          color="textPrimary">
            {t('menu')}
        </Typography>
      </button>
      <Drawer anchor="left" open={state.left} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
    </div>
  );
};

export default NavigationMenu;
