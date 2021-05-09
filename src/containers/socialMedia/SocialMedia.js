import { IconButton, Paper, Button, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGoogle,
    faFacebookF,
    faFacebook,
    faLinkedinIn,
    faGithub,
    faMediumM,
    faInstagram,
    faTwitter,
    faTwitch,
    faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { medium } from '../../assets/radiuses'
import { SocialMediaDetails } from '../../profileDetails'
import { Assessment } from '@material-ui/icons'

const useStyles = makeStyles({
    paper: {
        marginLeft: 'auto',
        padding: '5px',
        textAlign: 'center',
        marginTop: '10px',
        backgroundColor: 'transparent',
    },
    button: {
        color: 'white',
        padding: '0.8rem',
        borderRadius: '2.6rem',
        cursor: 'pointer',
        display: 'inline-block',
        fontSize: '2rem',
        // height: '2.6rem',
        lineHeight: '2.6rem',
        margin: '0 5px',
        marginBottom: '10px',
        position: 'relative',
        textAlign: 'center',
        // width: '2.6rem',
        marginBottom: '10px',
        transition: '0.2s ease-in',
    },
})

function getEnabledSocialMedia() {
    let socialMediaDict = {}
    for (let key in SocialMediaDetails) {
        if (SocialMediaDetails[key].enable)
            socialMediaDict[key] = SocialMediaDetails[key]
    }
    console.log(socialMediaDict)
    return socialMediaDict
}

export function SocialMedia() {
    const classes = useStyles()

    const socialMediaDict = getEnabledSocialMedia()
    const socialMediaIcons = {
        facebook: (
            <FontAwesomeIcon
                icon={faFacebook}
                className={classes.button}
                style={{ backgroundColor: '#3b5998' }}
            ></FontAwesomeIcon>
        ),
        linkedIn: (
            <FontAwesomeIcon
                icon={faLinkedinIn}
                className={classes.button}
                style={{ backgroundColor: '#0e76a8' }}
            ></FontAwesomeIcon>
        ),
        github: (
            <FontAwesomeIcon
                icon={faGithub}
                className={classes.button}
                style={{ backgroundColor: '#333' }}
            ></FontAwesomeIcon>
        ),
        instagram: (
            <FontAwesomeIcon
                icon={faInstagram}
                className={classes.button}
                style={{ backgroundColor: '#c13584' }}
            ></FontAwesomeIcon>
        ),
        google: (
            <FontAwesomeIcon
                icon={faGoogle}
                className={classes.button}
                style={{ backgroundColor: '#ea4335' }}
            ></FontAwesomeIcon>
        ),
        twitter: (
            <FontAwesomeIcon
                icon={faTwitter}
                className={classes.button}
                style={{ backgroundColor: '#1da1f2' }}
            ></FontAwesomeIcon>
        ),
        medium: (
            <FontAwesomeIcon
                icon={faMediumM}
                className={classes.button}
                style={{ backgroundColor: '#000' }}
            ></FontAwesomeIcon>
        ),
        stackOverflow: (
            <FontAwesomeIcon
                icon={faStackOverflow}
                className={classes.button}
                style={{ backgroundColor: '#f48024' }}
            ></FontAwesomeIcon>
        ),
        twitch: (
            <FontAwesomeIcon
                icon={faTwitch}
                className={classes.button}
                style={{ backgroundColor: '#772ce8' }}
            ></FontAwesomeIcon>
        ),
    }

    return (
        <Paper elevation={0} className={classes.paper}>
            {Object.entries(socialMediaDict).map(([key, value]) => {
                console.log('Check: ' + key)
                return socialMediaIcons[key]
            })}
        </Paper>
    )
}
