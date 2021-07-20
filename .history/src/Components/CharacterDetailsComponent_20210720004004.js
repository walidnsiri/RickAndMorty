import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import * as actions from "../actions/Characters";

import {
  Grid,
  Paper,
  CardHeader,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Divider,
  Chip
} from "@material-ui/core";


//import EditIcon from "@material-ui/icons/Edit";
//import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory, useLocation } from "react-router-dom";
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
  useParams,
  
} from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "600px",
    width: "600px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  media: {
    height: 0,
    width: "100%",
    paddingTop: "56.25%", // 16:9
  },
}));

const CharacterDetails = ({ ...props }) => {

  let { id } = useParams();
  const location = useLocation();
  const history = useHistory();

  const Character = props.Character;
  const episodes = [];
  for (const episode in Character.episode) {
        episodes.push(episode.split('/').pop());
  }

  const { record } = location.state;
  console.log(record)
  const classes = useStyles();
  const theme = useTheme();

  const handleMenuClose = () => {
    history.push("/");
  };

  const handleClick = (number) => {
    let path = `/EpisodeDetails/`+number; 
    history.push(path);
  };

  useEffect(() => {
    props.fetchCharacter(id)
  }, [id])//componentDidMount

  return (
    <div>
      <div>
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(0.5) translateY(-50%)",
          }}
        >
          <header></header>

          <Paper className={classes.paper} elevation={3}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} lg={4} md={6}>
                <Card style={{height:'100%'}}>
                <CardHeader title="Image:" />
                  <CardMedia
                    className={classes.media}
                    image={record.image}
                    title="Paella dish"
                  />
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} lg={4} md={6}>
                <Card style={{height:'100%'}}>
                  <CardHeader title="Details" />
                  <CardContent>
                    Name: <br/>
                    {Character.name}
                    <Divider/>
                    Gender: <br/>
                    {Character.gender}
                    <Divider/>
                    Species: <br/>
                    {Character.species}
                    <Divider/>
                    Status: <br/>
                    {Character.status}
                    <Divider/>
                    Created At: <br/>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {Character.created}
                    </Typography>
                    
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} lg={4} md={4}>
                <Card style={{height:'100%'}}>
                <CardHeader title="Episodes" />
                  <CardContent>
                      {episodes.map( episode => {
                        return   (
                        <Chip
                        key={episode}
                        label={"Episode "+episode}
                        onClick={() => handleClick(episode)}
                        style={{padding: '2%', margin: '1%'}}
                      />
                      )})}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </FadeTransform>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  Character: state.Characters.Character,
});

const mapActionToProps = {
  fetchCharacter: actions.fetchbyId,
};

export default connect(mapStateToProps, mapActionToProps)(CharacterDetails);

