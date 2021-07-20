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
} from "@material-ui/core";

import {
SkipPrevious as SkipPreviousIcon,
PlayArrow as PlayArrowIcon,
SkipNext as SkipNextIcon
} from "@material-ui/icons";


//import EditIcon from "@material-ui/icons/Edit";
//import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory,useLocation } from "react-router-dom";
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
  useParams,
} from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      height: '600px',
      width : '600px'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }));

const CharacterDetails = ({ ...props }) => {
  let { id } = useParams();
  const location = useLocation()
  const history = useHistory()
  const { record } = location.state
  const classes = useStyles();
  const theme = useTheme();

  const handleMenuClose = () => {
    history.push("/");
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
          <Grid container>
            <Grid item xs={6}>
    <Card className={classes.root}>
    <div className={classes.details}>
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          Live From Space
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Mac Miller
        </Typography>
      </CardContent>
      <div className={classes.controls}>
        <IconButton aria-label="previous">
          {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
        </IconButton>
        <IconButton aria-label="play/pause">
          <PlayArrowIcon className={classes.playIcon} />
        </IconButton>
        <IconButton aria-label="next">
          {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
        </IconButton>
      </div>
    </div>
    <CardMedia
      className={classes.cover}
      image="/static/images/cards/live-from-space.jpg"
      title="Live from space album cover"
    />
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

export default connect(
  mapStateToProps,
  mapActionToProps
)(CharacterDetails);


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