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
import Sidenav from 'components/sidenav/Sidenav';
import Hidden from '@material-ui/core/Hidden';
import { blue } from '@material-ui/core/colors';
import { makeStyles, useTheme } from "@material-ui/core/styles";

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

export default function Nav() {
  const classes = useStyles();
  const [IsOpen, setIsOpen] = React.useState(false);
  

 

  return (
    <div className={classes.root}>
    <AppBar position="static" className={classes.appBar}>
     <Toolbar className={classes.toolbar}>
      <IconButton onClick={this.openCloseSidenav}
       edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
       <MenuIcon />
      </IconButton>
      <Hidden xsDown>
       <Typography variant="h6" className={classes.title}>
        Rick and Morty
       </Typography>
      </Hidden>
      <div>
       <Button color="inherit" component={Link} to="/">Home</Button>
       <Button color="inherit" component={Link} to="/actors">Actors</Button>
       <Button color="inherit" component={Link} to="/companies">Companies</Button>
       <Button color="inherit" component={Link} to="/movies">Movies</Button>
       <Button color="inherit" component={Link} to="/genres">Genres</Button>
      </div>
     </Toolbar>
    </AppBar>
    <Sidenav isOpen={IsOpen} openCloseSidenav={setIsOpen(!IsOpen)} />
   </div>
  );
}