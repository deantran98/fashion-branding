import React from 'react';
import { styled } from "@mui/system";
import { List, ListItem, Drawer, ListItemText } from '@mui/material';

const useStyles = styled({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const NavigationMenu = () => {
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
      className={useStyles.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <button onClick={toggleDrawer('left', true)}>Open Menu</button>
      <Drawer anchor="left" open={state.left} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
    </div>
  );
};

export default NavigationMenu;
