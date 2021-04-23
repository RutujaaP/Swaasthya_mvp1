import React from 'react'
import ReactDOM from 'react-dom'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
})

export default function CNSmartPrescriptions() {
  return (
    <>
      <Typography variant='h6' color='primary'>
        Smart Presciptions
      </Typography>
      <Typography variant='s' color='primary'>
        Doctor Medical ID : 846531486
      </Typography>
      <Grid container spacing={24}>
        {[1, 2, 3].map(() => (
          <Grid item xs>
            <TextField />
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
      <Grid container spacing={24}>
        {[1, 2, 3].map(() => (
          <Grid item xs={4} sm={3} md>
            <TextField required type='number' />
          </Grid>
        ))}
      </Grid>
      <Typography variant='s'>Dr. Uday Kumar MBBS 988345728</Typography>
    </>
  )
}
