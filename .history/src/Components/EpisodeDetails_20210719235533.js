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
    Chip,
    Avatar
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
    const [Characters, setCharacters] = useState([]);
    
    const handleClick = () => {
        console.log("clicked!")
      };

    

    useEffect(() => {
       
       function fetchCharacters(chracaters) {
        var chars = [];
        const addtoarray= (val) => {
            chars.push(val)
            return chars;
        }
       
          chracaters.forEach( (c) =>  {
                const id = c.split('/').pop();
                api.Characters().fetchByIdCharacters(id)
                    .then(response => {
                        const res = response.data;
                        addtoarray(res)
                        
                        })
                    .catch(err => console.log(err))
            })
           
            console.log(chars)
            //setCharacters(chars)
        }


        api.Episode().fetchByIdEpisode(id)
                .then(response => {
                        setEpisode(response.data)
                        fetchCharacters(response.data.characters);
                        
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
                <Grid item xs={12} sm={12} lg={6} md={6}>
                  <Card style={{height:'100%'}}>
                  <CardHeader title="Details" />
                  <CardContent>
                    Name: <br/>
                    {episode.name}
                    <Divider/>
                    Episode: <br/>
                    {episode.episode}
                    <Divider/>
                    Air Date: <br/>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {episode.air_date}
                    </Typography>
                    
                  </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12} lg={6} md={6}>
                  <Card style={{height:'100%'}}>
                  <CardHeader title="Characters" />
                    <CardContent>
                        {Characters.map(character => {
                            return (
                               <Chip
                                key={character.id}
                                avatar={<Avatar alt={character.name} src={character.image} />}
                                label={character.name}
                                onClick={handleClick}
                                />
                            )
                        })}
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