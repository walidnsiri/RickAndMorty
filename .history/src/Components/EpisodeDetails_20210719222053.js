import React, { useState, useEffect } from "react";
import {
    useParams,
    Link,
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
  import { FadeTransform } from "react-animation-components";

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

const EpisodeDetails = ({...props }) => {
    
    let { id } = useParams();
    const classes = useStyles();

    useEffect(() => {
        
    }, [])

    return ( <div>
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
                          return   (
                          <Chip
                          key={episode.split('/').pop()}
                          label={"Episode "+episode.split('/').pop()}
                          onClick={() => handleClick(episode.split('/').pop())}
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
      </div>)

}


export default EpisodeDetails