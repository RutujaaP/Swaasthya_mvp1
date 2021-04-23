import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
})
export default function FormControlLabelPlacement() {
  const classes = useStyles()
  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>Select Payment Method</FormLabel>
      <RadioGroup row aria-label='position' name='position' defaultValue='Cash'>
        <FormControlLabel
          value='Cash'
          control={<Radio color='primary' />}
          label='Cash'
          labelPlacement='Cash'
        />

        <FormControlLabel
          value='Card'
          control={<Radio color='primary' />}
          label='Card'
          labelPlacement='Card'
        />

        <FormControlLabel
          value='UPI'
          control={<Radio color='primary' />}
          label='UPI'
          labelPlacement='UPI'
        />
      </RadioGroup>
      <Button
        //onClick={() => console.log('you clicked me')}
        type='submit'
        className={classes.field}
        color='secondary'
        variant='contained'
      >
        Submit
      </Button>
    </FormControl>
  )
}
