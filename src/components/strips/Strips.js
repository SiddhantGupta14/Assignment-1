import React, { useState, useEffect } from 'react';
import Detail from '../Details/Detail';
import classes from './Strips.module.css';


const Strips = ({data,loading}) => {
    const[view,setView]=useState(false);
    const undoDetails=()=>{
        console.log('Clicked!');
        setView(!view);
    }
return (
    data.map(userInfo  =>{
        return(
<div className={classes.cc} key={userInfo.id}>
    <div className={classes.Strips} >
        <div className={classes.name}>
            <p>{userInfo.name}</p>
        </div>
        <div className={classes.contact}>
            <div className={classes.heading}>
            CONTACT
            </div>
            <div className={classes.content}>
                {userInfo.username}
            </div>
        </div>
        <div className={classes.city}>
        <div className={classes.heading}>
            CITY
        </div>
            <div className={classes.content}>
            {userInfo.address.city}
            </div>
        </div>
        <div className={classes.state}>
           <div className={classes.heading}>
            STATE
           </div>
            <div className={classes.content}>
                {userInfo.address.zipcode}
            </div>
        </div>
        <div className={classes.button}>
            <button onClick={undoDetails} >
               
                    {view===true?<p>Hide Details</p>:<p>View Details</p>}
            </button>
        </div>
    </div>
    {view && <Detail /> }
        
        
    </div>

        )
    })
    
  )
}

export default Strips;