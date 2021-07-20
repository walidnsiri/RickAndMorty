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
  import { useHistory, useLocation } from "react-router-dom";
  import * as actions from "../actions/Episode";
  import * as characterActions from "../actions/Characters";
  import api from "../actions/RickMortyApi";
  import { connect, useSelector } from "react-redux";
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
    const history = useHistory();
   /* const [episode, setEpisode] = useState({});
    const [Characters, setCharacters] = useState([]);*/

    const Episode = props.Episode;
    const Characters = props.Characters;

    const characters = Episode.characters;
    const character_ids = [];
   
    for (const character in characters) { 
        character_ids.push(characters[character].split('/').pop());
    }
   

   /* const charactersIds = ''; 
    characters.forEach( (c) =>  {
        const id = c.split('/').pop();
        charactersIds.concat(','+id);
        
    })*/
    
    const handleClick = (id) => {
        let path = `/CharacterDetails/`+id; 
        history.push(path);
      };

    

    useEffect(() => {
        props.fetchbyId(id);
        console.log(character_ids)
        props.fetchbyIds(character_ids.toString());
       /*function fetchCharacters(chracaters) {
        const chars = [];
        
        const addtoarray= (val) => {
           chars.push(val)
        }
       
          chracaters.forEach( (c) =>  {
                const id = c.split('/').pop();
                api.Characters().fetchByIdCharacters(id)
                    .then(response => {
                        const res = response.data;
                        chars.push(res);
                        setCharacters([...chars])
                        })
                    .catch(err => console.log(err))
            })
           
            console.log(chars)
            
        }


        api.Episode().fetchByIdEpisode(id)
                .then(response => {
                        setEpisode(response.data)
                        fetchCharacters(response.data.characters);
                        
                    })
                .catch(err => console.log(err))*/
            
    }, [id,character_ids])



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
                <Grid item xs={12} sm={12} lg={6} md={6}>
                  <Card style={{height:'543px'}}>
                  <CardHeader title="Details" />
                  <CardContent>
                    Name: <br/>
                    {Episode.name}
                    <Divider/>
                    Episode: <br/>
                    {Episode.episode}
                    <Divider/>
                    Air Date: <br/>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {Episode.air_date}
                    </Typography>
                    
                  </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12} lg={6} md={6}>
                  <Card style={{height:'543px'}}>
                  <CardHeader title="Characters" />
                    <CardContent>
                        {Characters.map(character => {
                            return (
                               <Chip
                                key={character.id}
                                avatar={<Avatar alt={character.name} src={character.image} />}
                                label={character.name}
                                onClick={() => handleClick(character.id)}
                                style={{padding: '2%', margin: '1%'}}
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

const mapStateToProps = (state) => ({
    Episode: state.Episodes.Episode,
    Characters: state.Characters.Characters,
  });
  
  const mapActionToProps = {
    fetchEpisode: actions.fetchAll,
    fetchbyId: actions.fetchbyId,
    fetchbyIds: characterActions.fetchbyIds,
  };
  
export default connect(mapStateToProps, mapActionToProps)(EpisodeDetails);

