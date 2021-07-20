import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import * as actions from "../actions/Characters";
import {
 
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Label,
} from "reactstrap";

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
  Card
} from "@material-ui/core";
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

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
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
        <Card key={record.id}>
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
        </Card>
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
)(withStyles(styles)(CharacterDetails));
