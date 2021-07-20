import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import * as actions from "../actions/Characters";
import {
  Card,
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
} from "@material-ui/core";
//import EditIcon from "@material-ui/icons/Edit";
//import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
  useParams,
} from "react-router-dom";
import { FadeTransform } from "react-animation-components";

const styles = (theme) => ({
  root: {
    "& .MuiTableCell-head": {
      fontSize: "1.25rem",
    },
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
});

const CharacterDetails = ({ classes, ...props }) => {
  let { id } = useParams();
  const location = useLocation()
  const { record } = location.state
 
  /*const updatedCharacter = useSelector((state) => state.Characters.Character);
  console.log(updatedCharacter);
  const [episodes,setEpisodes] = useState([]);
  //setUpdatedCharacter(updatedCharacte);

  useEffect(() => {
    props.fetchCharacter(id);
    setEpisodes(updatedCharacter.episode)
    console.log(episodes)
  }, [id]); //componentDidMount*/

  const handleMenuClose = () => {
    //history.push("/CharacterDetails");
    window.location.reload();
  };

  return (
    <div>
      <div>
        <Card key={record.id}>
          <CardImg src={record.image} />
          <CardBody>
            <CardTitle> {record.name} </CardTitle>
            <CardText> {record.id} </CardText>
            {/*episodes.map((episode) => {
              return episode;
            })*/}
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
