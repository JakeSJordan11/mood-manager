import AppBar from "@material-ui/core/AppBar";
import classNames from "classnames";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import React, { Component } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles, Drawer } from "@material-ui/core";

const drawerWidth = 240;

const styles = theme => ({
  // ! don't know what this does
  // root: {
  //   display: "flex"
  // },
  // ! don't know what this does
  // appBar: {
  //   transition: theme.transitions.create(["margin", "width"], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen
  //   })
  // },
  // * handles the drawer animation
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  // * gives the drawer button it's own space
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  }
  // * hides menuButton on drawer open
  // hide: {
  //   display: "none"
  // }
});

class Layout extends Component {
  state = {
    open: false
  };

  // * changes state to true / used to open drawer
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  // * changes state to false / used to close drawer
  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    // ? why create a const for this.props & this.state
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Mood Manager</Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="temporary"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader} />
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Layout);
