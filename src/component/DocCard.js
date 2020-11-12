import React, { useState } from 'react'
import './DocCard.css';
import {Avatar,  Badge, Button, Divider, Grid, IconButton, Paper, TextField, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { green } from '@material-ui/core/colors';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Bookform from './Bookform';

const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);

const useStyles=makeStyles((theme)=>({
    rounded: {
        color: '#fff',
        backgroundColor: green[500],
        marginTop:20,
        marginLeft:20,
        paddingLeft:20,
      },
      button: {
        margin: theme.spacing(1),
        color: '#fff',
        marginRight:10,
        marginTop:20,
        marginLeft:20,
        marginBottom:20,
        alignItems:'right',
        backgroundColor: green[500],
      },
}));



function DocCard({docimg, docname, docspec, docexp, docaddr, docconsfee, docreview, docavailability}) {
    const classes = useStyles();
    const [modState, setModalState] = useState(false);
    const onOpenModal = ()=>{
      setModalState(true);
    }

    const onCloseModal = ()=>{
      setModalState(false);
    }
    
    return (
        <div className="doccard">
            {/* <div className="doccard__heading">
            </div> */}
                    <div className="doccard__image">
                        <StyledBadge
                            overlap="circle"
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                            }}
                            variant="dot"
                        >
                            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1292306/pexels-photo-1292306.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="doccard__avatar" />
                        </StyledBadge>
                            
                        {/* <div className="doccard__details"> */}
                        <div className="doccard__rating">
                         {/*array is creating an array of 4, fill it empty values and map through it. */
                                Array(5)
                                .fill()
                                .map((_)=>(<p>⭐</p>))
                         }
                        </div>
                        <div  className="doccard__bookbutton"><Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            startIcon={<AssignmentTurnedInIcon />}
                            onClick={onOpenModal}
                        >
                            Book
                        </Button>
                        </div>
                        {/* <p className="doccard__bookapntmnt" >Book for</p> */}
                        {/* </div> */}
                    </div>
                    <div className="doccard__details">
                        <div className="doccard__infoappon">
                            <div className="doccard__info">
                                <Typography gutterBottom variant="subtitle1" className="doccard__profile">
                                Dr. Somasree (BAMS)
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                Prasoothi, Panchakarma
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                2 Years of experience
                                </Typography>
                                <Typography variant="subtitle1">Itoozhi ayurveda hospital</Typography>
                                <Typography variant="body2">&#8377; 200 consultation fee at clinic</Typography>
                            </div>
                        </div>
                        <div id="doccard__ac" className="doccard__appcontents">
                        <TextField id="date" type="date" defaultValue="2020-05-24" className="doccard__appointment"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        />
                        
{/* 
                        <IconButton 
                            variant="contained"
                            color="green"
                            className={classes.button}
                            >
                            <AssignmentTurnedInIcon/>
                            </IconButton> */}
                        </div>
                    </div>    
                    <Modal  open={modState} onClose={onCloseModal}
                    center
                    
                    >
                        <Bookform/>
                    </Modal>      
        
        </div>
    )
}

export default DocCard
