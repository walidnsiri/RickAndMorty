import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/Episode";
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles, ButtonGroup, Button ,Avatar,TablePagination } from "@material-ui/core";




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


const Episodes = ({ classes, ...props }) => {
   
    const [pageSize, setPageSize] = React.useState(5);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(2);
  

    useEffect(() => {
        props.fetchAllEpisodes()
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
                                   
                                    <TableCell>Episode Name</TableCell>
                                    <TableCell>Air Date</TableCell>
                                    <TableCell>Episode</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                            
                                {
                                    props.EpisodesList.map((record) => {
                                        return (<TableRow key={record.id} hover> 
                                           
                                            <TableCell>{record.name}</TableCell>
                                            <TableCell>{record.air_date}</TableCell>
                                            <TableCell>{record.episode}</TableCell>
                                           
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
        count="3"
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
    EpisodesList: state.Episodes.list
})

const mapActionToProps = {
    fetchAllEpisodes: actions.fetchAll,
    
}

export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(Episodes));