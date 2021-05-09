import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { SocialMedia } from '../../containers/socialMedia/SocialMedia'

import theme from './AboutCardStyles'

const useStyles = makeStyles(theme)

export default function AboutCard() {
    const classes = useStyles()

    return (
        <Paper elevation={0} className={classes.main}>
            <Typography
                variant="h2"
                align="center"
                className={classes.typographyH1}
            >
                Rahul Kalita
            </Typography>
            <Typography
                variant="body1"
                align="center"
                className={classes.typographyBody1}
            >
                Developer | Wannabe Full Stack | Casual Chess Player
            </Typography>
            <SocialMedia />
        </Paper>
    )
}
