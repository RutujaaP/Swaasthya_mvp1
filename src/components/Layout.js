
import { makeStyles } from '@material-ui/core'
import React from 'react'
import Drawer  from '@material-ui/core/Drawer'
import Typography  from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'

const drawerWidth=240

const useStyles=makeStyles({
 page: {
  background:'#f9f9f9',
  width:'100%'
 
},

paper: {
    background: "#"
  },

drawer: {
 width: drawerWidth
},

drawPaper: {
 width: drawerWidth
},



root: {
display: 'flex'
}

})



export default function Layout({children}) {
 const classes = useStyles()
 
 return (
  <div className={classes.root}>

   <Drawer
   classes={{ paper: classes.paper }}
   className={classes.drawer}
   variant="permanent"
   anchor="left"
   classes={{ paper: useStyles.paper }}
   classes={{paper:classes.drawPaper}}
   >
    <div>
     <Typography variant="h5">
      Enter Patient Health ID
     </Typography>
    </div>


  {<List>
    <ListItem>
      <ListItemText primary="Dashboard"></ListItemText>
      <Avatar src="/Dashboard.png"/>
    </ListItem>

  <ListItem>
      <ListItemText primary="My Profile"></ListItemText>
      <Avatar src="/Profile.png"/>
    </ListItem>

  </List> }


   </Drawer>

   <div className={classes.page}>
    {children}
    </div>
  
  </div>
 )

}