import React, {useState} from 'react';
import {authProvider} from './Firebase/config'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/icons/MoreVert';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

import logo from './icon.jpeg'


import useStyles from './useStyles';
import { Layout } from 'react-admin';


const MyAppBar = props =>{
    const classes = useStyles(); 
   
    const [state,setState] = useState(false);
    const handleChange = (event) => {
      authProvider.logout();
    };

    
    
    //   const toggleDrawer = (event)=>{
    //       setState = !state;
    //       return state;
    //     }

    return(
        <AppBar {...props} className={classes.appBar}>
            <Toolbar >
                <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography  variant="h6" >
                        Admin console
                    </Typography>
                    <IconButton edge="end"  onClick={handleChange} >
                        <Avatar  alt="admin" src={logo} />
                </IconButton>
                
            </Toolbar>
           
        </AppBar>
        
    )
}

export function  MyLayout(props){
    const classes = useStyles();
    return (
        <Layout className={classes.layout}
            {...props}
            appBar={MyAppBar}
            // menu={MyMenu}
            // notification={MyNotification}
        />
    )
} 

