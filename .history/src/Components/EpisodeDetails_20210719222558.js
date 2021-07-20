import React, { useState, useEffect } from "react";
import {
    useParams,
    Link,
  } from "react-router-dom";
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
  import { FadeTransform } from "react-animation-components";
  import { makeStyles, useTheme } from "@material-ui/core/styles";
  import api from "../actions/RickMortyApi"
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
    const [episode, setEpisode] = useState({});

    useEffect(() => {
        api.Episode().fetchByIdEpisode(id)
                .then(response => {
                        setEpisode(response.data)
                    })
                .catch(err => console.log(err))
            
    }, [id])

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
                  <CardContent>
                     
                      
                     </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12} lg={4} md={6}>
                  <Card style={{height:'100%'}}>
                    <CardHeader title="Details" />
                    <CardContent>
                     
                      
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12} lg={4} md={4}>
                  <Card style={{height:'100%'}}>
                  <CardHeader title="Episodes" />
                    <CardContent>
                        
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