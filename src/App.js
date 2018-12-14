import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import ButtonAppBar from "./components/Layout";
import PersistentDrawerLeft from "./components/AppBar.js";
import CardStack from "./components/CardStack";
import { Button } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/tracker" default component={Tracker} />
        <Route path="/notes" component={Notes} />
        <Route path="/checklist" component={Checklist} />
      </Switch>
    );
  }
}

export default App;

const Main = () => {
  return (
    <>
      <ButtonAppBar />
      <Grid container>
        <Grid>
          <CardStack style={{ backgroundColor: "#eeeeee" }}>
            <CardStack style={{ backgroundColor: "#eeeefe" }}>
              <CardStack style={{ backgroundColor: "#ffeeff" }} />
            </CardStack>
          </CardStack>
        </Grid>
        <Grid>
          <CardStack style={{ backgroundColor: "#eeeeee" }}>
            <CardStack style={{ backgroundColor: "#eeeefe" }}>
              <CardStack style={{ backgroundColor: "#ffeeff" }} />
            </CardStack>
          </CardStack>
        </Grid>
      </Grid>
    </>
  );
};

const Dashboard = () => {
  return (
    <ButtonAppBar>
      <Grid container justify="center" spacing={16}>
        <Grid item>
          <Card>
            <CardContent>: )</CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>) :</CardContent>
          </Card>
        </Grid>
      </Grid>
    </ButtonAppBar>
  );
};

const Tracker = () => {
  return (
    <PersistentDrawerLeft>
      <Grid container>
        <Grid item>
          <Fab color="secondary" aria-label="Add">
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </PersistentDrawerLeft>
  );
};

const Notes = () => {
  return (
    <PersistentDrawerLeft>
      <Grid container>
        <Grid item>Welcome to your notes</Grid>
      </Grid>
    </PersistentDrawerLeft>
  );
};

const Checklist = () => {
  return (
    <PersistentDrawerLeft>
      <Grid container>
        <Grid item>Welcome to your checklist</Grid>
      </Grid>
    </PersistentDrawerLeft>
  );
};
