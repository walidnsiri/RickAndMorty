import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/Characters";

import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles, ButtonGroup, Button ,Avatar,TablePagination } from "@material-ui/core";
//import EditIcon from "@material-ui/icons/Edit";
//import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from 'react-router-dom';

import {Link, Switch, Route,BrowserRouter,Redirect,Router } from 'react-router-dom';
import CharacterDetails from "./CharacterDetailsComponent";




import { FadeTransform } from 'react-animation-components';




const styles = theme => ({  
    
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.25rem"
        }
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})


const Characters = ({ classes, ...props }) => {
   
    const [pageSize, setPageSize] = React.useState(5);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(2);
  

    useEffect(() => {
        props.fetchAllDCandidates()
  
    }, [])//componentDidMount


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    return (
        <div>
  <div>
      <FadeTransform in 
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
        <header>

        </header>
        
        
        <Paper className={classes.paper} elevation={3}>
            
            <Grid container>
                
                <Grid item xs={6}>
                    <TableContainer>
                        <Table >
                            <TableHead className={classes.root}  >
                            
                                <TableRow>
                                    <TableCell>Character Photo</TableCell>
                                    <TableCell>Character Name</TableCell>
                                    <TableCell>Character Type</TableCell>
                                    <TableCell>Character Status</TableCell>
                                    <TableCell>Character gender</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                            
                                {
                                    props.CharactersList.map((record) => {
                                        return (<TableRow key={record.id} hover> 
                                            <TableCell><Avatar alt="Remy Sharp" src={record.image} /></TableCell>
                                            <TableCell>{record.name}</TableCell>
                                            <TableCell>{record.type}</TableCell>
                                            <TableCell>{record.status}</TableCell>
                                            <TableCell>{record.gender}</TableCell>
                                            <TableCell>
                                                    
                                                
                                                    <Link to={"/CharacterDetails/" + record.id} key={record.id} props={record} >Character Details
                                                    
                                                    </Link>
                                                   
                                                  
                                                    
                                                </TableCell>
                                            <TableCell>
                                            
                                            </TableCell>
                                            <TableCell> 
                                           
                                            </TableCell>
                                        </TableRow>)
                                    })
                                }
                                
                                <TablePagination
        rowsPerPageOptions={[2, 25, 100]}
        component="div"
        count={3}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
        </FadeTransform>
        
        </div>
       
        
       </div>
       
    );
}

const mapStateToProps = state => ({
    CharactersList: state.Characters.Characters,
    CharacterInfo:state.Characters.info
})

const mapActionToProps = {
    fetchAllDCandidates: actions.fetchAll,
    fetchAllDCandidatesbyPage:actions.fetchAllbyPage
    
}

export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(Characters));