import React from 'react';
import { List, ListItem, Drawer, ListItemText } from '@mui/material';

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
      className='flex justify-center w-32 h-full bg-[#1B1B1B]'
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemText primary="Home" style={{ color: '#F3F3F3' }}/>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Brands" style={{ color: '#F3F3F3' }}/>
        </ListItem>
        <ListItem button>
          <ListItemText primary="About" style={{ color: '#F3F3F3' }}/>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contact" style={{ color: '#F3F3F3' }}/>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className='flex'>
      <button onClick={toggleDrawer('left', true)}><span className="text-xl text-[#E1E1E1]">Menu</span></button>
      <Drawer anchor="left" open={state.left} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
    </div>
  );
};

export default NavigationMenu;
