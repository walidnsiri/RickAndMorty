import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const open = Boolean(anchorEl);
  const openE2 = Boolean(anchorE2);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseE1 = () => {
    setAnchorEl(null);
  };
  const handleCloseE2 = () => {
    setAnchorE2(null);
  };

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
        Movies/Genres
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
    <Sidenav isOpen={this.state.isOpen} openCloseSidenav={this.openCloseSidenav} />
   </div>
  );
}
