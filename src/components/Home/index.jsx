import React from 'react'
import { Grid, Typography, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Iframe from '../Iframe'

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
}))

const Home = ({ spotifyUrl }) => {
  const classes = useStyles()

  return (
    <Grid container justify="center">
      <Typography variant="h2" className={classes.root}>
        Home
      </Typography>

      <Grid container justify="center">
        <Iframe
          spotifyLink={
            'https://open.spotify.com/playlist/2geuBVoTTYRNKl407ZXBbQ?si=8e35e9de1f6a4a01'
          }
          scrolling="no"
          frameborder="0"
          allowtransparency="true"
        />

        <Iframe
          spotifyLink={
            'https://open.spotify.com/track/614NVFo5csQqRnryl4jXs2?si=ccdc69b1ee224ad7'
          }
          scrolling="no"
          frameborder="0"
          allowtransparency="true"
        />
      </Grid>
    </Grid>
  )
}

export default Home
