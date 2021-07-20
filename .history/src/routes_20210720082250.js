import React from 'react';

const CharacterComponent = React.lazy(() => import("./Components/CharacterComponent"));
const EpisodeComponent = React.lazy(() => import("./Components/EpisodeComponent"));
const CharacterDetailsComponent = React.lazy(() => import("./Components/CharacterDetailsComponent"));
const EpisodeDetails = React.lazy(() => import("./Components/EpisodeDetails"));
const Logout = React.lazy(() => import("./Components/Logout"));


const routes = [
  { path: '/Episodes', name: 'Episodes', component: EpisodeComponent },
  { path: '/Characters', name: 'Characters', component: CharacterComponent },
  { path: '/CharacterDetails/:id', exact: true,  name: 'CharacterDetails', component: CharacterDetails },
  { path: '/EpisodeDetails/:id', exact: true, name: 'EpisodeDetails', component: EpisodeDetails },
  { path: '/Logout', name: 'Logout', component: Logout },
];

export default routes;