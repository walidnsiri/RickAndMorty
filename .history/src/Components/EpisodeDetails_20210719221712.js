import React, { useState, useEffect } from "react";
import {
    useParams,
  } from "react-router-dom";
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

const EpisodeDetails = ({...props }) => {
    
    let { id } = useParams();

    useEffect(() => {
        
    }, [])

    return (<div>
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
                  <TableContainer>
                    <Table>
                      <TableHead className={classes.root}>
                        <TableRow>
                          <TableCell>Character Photo</TableCell>
                          <TableCell>Character Name</TableCell>
                          <TableCell>Character Type</TableCell>
                          <TableCell>Character Status</TableCell>
                          <TableCell>Character gender</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {props.CharactersList.map((record) => {
                          return (
                            <TableRow key={record.id} hover>
                              <TableCell>
                                <Avatar alt="Remy Sharp" src={record.image} />
                              </TableCell>
                              <TableCell>{record.name}</TableCell>
                              <TableCell>{record.type}</TableCell>
                              <TableCell>{record.status}</TableCell>
                              <TableCell>{record.gender}</TableCell>
                              <TableCell>
                                <Link
                                  to={{
                                      pathname:"/CharacterDetails/" + record.id,
                                      state: {
                                        record: record,
                                      } 
                                  }}
                                  key={record.id}
                                >
                                  Character Details
                                </Link>
                              </TableCell>
                              <TableCell></TableCell>
                              <TableCell></TableCell>
                            </TableRow>
                          );
                        })}
  
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
      </div>)

}


export default EpisodeDetails