import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'




const useStyles = makeStyles({  //btn is th name of the class
  field: {
    marginTop:20,
    marginBottom:20,
    display:'block'
    }
})



export default function Notes() {
   const classes = useStyles()
  const[title, setTitle]=useState('')
  const[details, setDetails]=useState('')
  const handleSubmit=(e)=>{
   e.preventDefault()  //default action of form being submitted  is to referesh the page and humko woh nahi chahiye
   if(title && details){
     console.log(title,details)
   }
  }  
  return (


    <Container>
    

   
     {/*  {/* <Typography 
      variant="h1"
      colour="primary"
      align="center">
        Create a New Note
      </Typography> */}
      <Typography
      variant="h6"
      color="textSecondary"
      component="h2"
      gutterBottom
      >
      Swaasthya App
      </Typography>
      <Avatar src="/Avatar.png"></Avatar>
      <Button
      //className={classes.btn}  //adding properties listed in btn class to this button
        onClick={() => console.log('you clicked me')}
        type="submit" 
        className={classes.field}
        color= "primary"
        variant="contained">
        Upload New Picture
      </Button>
      <Button
        onClick={() => console.log('you clicked me')}
        type="submit" 
        //color="secondary" 
        variant="contained">
       Delete
      </Button>

      

      <form noValidate autoComp="off" onSubmit={handleSubmit}>
        <TextField
        on Change={(e)=>setTitle(e.target.value)} //whatever the user types, is set as the title
        className={classes.field}
        label="Enter Medical Number"
        variant="outlined"
        color="primary"
        fullWidth
        required
        ></TextField>
      </form>

      <form noValidate autoComp="off" onSubmit={handleSubmit}> 
        <TextField on Change={(e)=>setTitle(e.target.value)}
        className={classes.field}
        label="Full Name"
        variant="outlined"
        color="primary"
        required
        
        ></TextField>
      </form>

      <form noValidate autoComp="off" onSubmit={handleSubmit}>
        <TextField on Change={(e)=>setTitle(e.target.value)}
        className={classes.field}
        label="Designation"
        variant="outlined"
        color="primary"
        required
        
        ></TextField>
      </form>

      <form noValidate autoComp="off" onSubmit={handleSubmit}>
        <TextField on Change={(e)=>setTitle(e.target.value)}
        className={classes.field}
      label="Specialization and Bio"
        variant="outlined"
        color="primary"
        required
        multiline
        rows={10}
        fullWidth
        
        ></TextField>
      </form>

      <form noValidate autoComp="off" onSubmit={handleSubmit}>
        <TextField on Change={(e)=>setTitle(e.target.value)}
        className={classes.field}
        label="Contact Number"
        variant="outlined"
        color="primary"
        required
        
        ></TextField>
      </form>


      <form noValidate autoComp="off">
        <TextField
        className={classes.field}
        label="Clinical Address"
        variant="outlined"
        color="primary"
        required
        
        ></TextField>
      </form>

      <form noValidate autoComp="off">
        <TextField
        className={classes.field}
        label="Email"
        variant="outlined"
        color="primary"
        required
        
        ></TextField>
      </form>

      <form noValidate autoComp="off">
        <TextField
        className={classes.field}
        label="Website"
        variant="outlined"
        color="primary"
        required
        
        ></TextField>
      </form>



        <Button
        //onClick={() => console.log('you clicked me')}
        type="submit" 
        color="secondary" 
        variant="contained">
        Save
      </Button>
   
  
      
   </Container>
  )
}
