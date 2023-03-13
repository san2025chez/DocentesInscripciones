import React from 'react';
import { Toolbar, AppBar, Typography } from '@material-ui/core';

const Header = ({ }) => {
  return (
    <AppBar position="static" color='secondary'>
      <Toolbar>
        <Typography variant="h6">
         FORMULARIO DE INSCRIPCION PROMACE 2022
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;