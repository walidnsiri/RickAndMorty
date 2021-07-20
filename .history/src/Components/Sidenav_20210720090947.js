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
              <ListItemText primary="Characters" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Episodes" />
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