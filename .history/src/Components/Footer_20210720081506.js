import React from 'react'
import { CFooter } from '@coreui/react'

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
    Footer

  } from "@material-ui/core";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <a href="https://esprit.tn" target="_blank" rel="noopener noreferrer">Walid</a>
        <span className="ml-1">&copy; 2020.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://esprit.tn" target="_blank" rel="noopener noreferrer">Walid</a>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
