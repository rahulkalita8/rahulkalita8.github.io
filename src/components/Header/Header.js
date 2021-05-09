import React from 'react'
import { Grid, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import theme from './HeaderStyles'

const useStyles = makeStyles(theme)

export default function Header() {
    const classes = useStyles()

    return (
        <Container className={classes.header}>
            <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
                className={classes.grid}
            >
                <Grid item className={classes.gridItem}>
                    <Typography>Experience</Typography>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Typography> Achievement</Typography>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Typography>Skills</Typography>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Typography>Contact</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}
