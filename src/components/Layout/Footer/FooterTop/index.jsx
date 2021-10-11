import React from 'react'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { colors } from '../../../Styles/Color'

import FormSubscribe from './FormSubscribe'
import FooterNav from './FooterNav'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    padding: theme.spacing(2, 4),
    background: colors.MidnightBlue,
    minHeight: `${theme.spacing(7)}vh`,
    rowGap: theme.spacing(6),
  },
}))

const FooterTop = ({ handleSubmit, email, setEmail }) => {
  const classes = useStyles()
  return (
    <Grid
      container
      justify="space-evenly"
      alignItems="center"
      wrap="wrap"
      className={classes.toolbar}
    >
      <Grid item xs={12} sm={2}>
        Icon
      </Grid>
      <FooterNav />
      <FormSubscribe
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
      />
    </Grid>
  )
}

export default FooterTop