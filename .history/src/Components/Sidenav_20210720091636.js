import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = () => ({
  root: {
    width: 250,
  },
});

export class Sidenav extends Component {
  render() {
    const { classes, isOpen, openCloseSidenav } = this.props;
    return (
      <Drawer open={isOpen} onClose={openCloseSidenav}>
        <div
          className={classes.root}
          onClick={openCloseSidenav}>
          <List>
          <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <Button color="inherit" component={Link} to="/welcome">Welcome</Button>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
            <Button color="inherit" component={Link} to="/Characters">Characters</Button>
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <Button color="inherit" component={Link} to="/Episodes">Episodes</Button>
            </ListItem>
          </List>
        </div>
      </Drawer>
    );
  }
}

Sidenav.propTypes = {
  classes: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  openCloseSidenav: PropTypes.func.isRequired,
};

export default withStyles(styles)(Sidenav);