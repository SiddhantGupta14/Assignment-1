import React from 'react';
import Strips from '../strips/Strips';
import classes from './Detail.module.css';

const Detail = () => {
    return (
    <div className={classes.details}>
        <div className={classes.description}>
            <div className={classes.heading}>Description</div>
            <p className={classes.content}>provide customer with private flight booking@ lowest price garunteedand also a railway e ticket booking.also offering international flight booking giving service to our customer since 1995. now going to start haj n umrao very soon.
            </p>
        </div>
        <div className={classes.pDetails}>
            <div className={classes.left}>
                <div className={classes.contact}>
                    <p className={classes.heading}>Contact Person</p>
                    <p className={classes.content}>Leopoldo_Corkery</p>
                </div>
                <div className={classes.Designation}>
                    <p className={classes.heading}>Designation</p>
                    <p className={classes.content}>Deckow-Crist
                    </p>
                </div>
                <div className={classes.email}>
                    <p className={classes.heading}>Email</p>
                    <p className={classes.content}>Sincere@april.biz</p>
                </div>
                <div>
                    <p className={classes.heading}>Phones</p>
                    <p className={classes.content}>1-770-736-8031 x56442</p>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.address}>
                    <p className={classes.heading}>Address</p>
                    <p className={classes.content}>Apt. 556 Kulas Light,Gwenborough</p>
                </div>
                <div className={classes.city}>
                    <p className={classes.heading}>City</p>
                    <p className={classes.content}>South Elvis</p>
                </div>
                <div className={classes.state}>
                    <p className={classes.heading}>State</p>
                    <p className={classes.content}>Wisokyburgh</p>
                </div>
                <div className={classes.country}>
                <p className={classes.heading}>Country</p>
                <p className={classes.content}>Scotland</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detail