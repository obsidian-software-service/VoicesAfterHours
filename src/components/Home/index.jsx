import React from 'react'
import { Grid, Typography, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Iframe from '../Iframe'

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
  cardMediaT: {
    width: 300,
    height: 380,
  },
  cardMediaB: {
    width: 300,
    height: 56,
    border: 'none',
    overflow: 'hidden',
  },
}))

const Home = () => {
  const classes = useStyles()
  return (
    <Grid container justify="center">
      <Typography variant="h2" className={classes.root}>
        Home
      </Typography>

      <Iframe
        src="https://open.spotify.com/embed/playlist/2geuBVoTTYRNKl407ZXBbQ"
        className={classes.cardMediaT}
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />

      <Iframe
        src="https://open.spotify.com/follow/1/?uri=spotify:user:11173597240?si=3b9fa8a7bd714564&size=detail&theme=dark"
        className={classes.cardMediaB}
        scrolling="no"
        frameborder="0"
        allowtransparency="true"
      />

      <Iframe
        src="https://open.spotify.com/embed/track/0Z2OhR9OoUdZ9rhEy9ECkq"
        width="300"
        height="80"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    </Grid>
  )
}

export default Home
