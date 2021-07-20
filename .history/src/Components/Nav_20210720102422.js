import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Sidenav from './Sidenav';
import Hidden from '@material-ui/core/Hidden';
import { blue } from '@material-ui/core/colors';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {useAuth0} from '@auth0/auth0-react'
const Logout = React.lazy(() => import("./Logout"));
const Login = React.lazy(() => import("./Login"));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: blue,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: 'space-between',
  }
}));

export function Nav() {
  const classes = useStyles();
  const [IsOpen, setIsOpen] = React.useState(false);
  const {isAuthenticated} = useAuth0();
  const openCloseSidenav = () => {
    setIsOpen(!IsOpen)
  }
 

  return (
    <div className={classes.root}>
    <AppBar position="static" className={classes.appBar}>
     <Toolbar className={classes.toolbar}>
      <IconButton onClick={openCloseSidenav}
       edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
       <MenuIcon />
      </IconButton>
      <Hidden xsDown>
       <Typography variant="h6" className={classes.title}>
        Rick and Morty
       </Typography>
      </Hidden>
      <div>
      {isAuthenticated ? <Login/> : <Logout/>}
      </div>
     </Toolbar>
    </AppBar>
    <Sidenav isOpen={IsOpen} openCloseSidenav={openCloseSidenav} />
   </div>
  );
}


export default React.memo(Nav)
