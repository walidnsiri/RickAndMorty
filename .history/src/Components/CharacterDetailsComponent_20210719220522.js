import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import * as actions from "../actions/Characters";

import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  withStyles,
  ButtonGroup,
  Button,
  Avatar,
  TablePagination,
  CardHeader,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Divider,
  Chip
} from "@material-ui/core";

import {
  SkipPrevious as SkipPreviousIcon,
  PlayArrow as PlayArrowIcon,
  SkipNext as SkipNextIcon,
} from "@material-ui/icons";

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
  const { record } = location.state;
  console.log(record)
  const classes = useStyles();
  const theme = useTheme();

  const handleMenuClose = () => {
    history.push("/");
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

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
                <Card>
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
                    {record.name}
                    <Divider/>
                    Gender: <br/>
                    {record.gender}
                    <Divider/>
                    Species: <br/>
                    {record.species}
                    <Divider/>
                    Status: <br/>
                    {record.status}
                    <Divider/>
                    Created At: <br/>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {record.created}
                    </Typography>
                    
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} lg={4} md={4}>
                <Card style={{height:'100%'}}>
                <CardHeader title="Episodes" />
                  <CardContent>
                      {record.episode.map( episode => {
                        return   <Chip
                        key={episode.split('/').pop()}
                        label={"Episode "+episode.split('/').pop()}
                        onClick={handleClick(episode.split('/').pop())}
                        style={{padding: '2%', margin: '1%'}}
                      />
                      })}
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

/* <Card key={record.id} className={classes.root}>
            <CardHeader
            title={record.name}
            />
          <CardImg src={record.image} />
          <CardBody>
            <CardTitle> {record.name} </CardTitle>
            <CardText> Episodes</CardText>
            {record.episode.map((episode) => {
              return <CardText key={episode}> {episode.split('/').pop()} </CardText>;
            })}
          </CardBody>
        </Card>*/
