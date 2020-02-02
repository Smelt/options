import React from 'react'
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import { withStyles, withTheme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'
import { Typography } from '@material-ui/core'
import { styles } from './styles'
import Fab from '@material-ui/core/Fab'
import { Select, InputLabel, Button } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'

class LongCall extends React.Component {


    onSearchSecurity = e => {
        e.preventDefault()
        this.props.startLoadTickerPrice()
        this.props.startLoadOptionChain('sfix')
    }

    render() {

        const { classes, theme } = this.props
        const { tickerPrice } = this.props
        return (
            <React.Fragment>
                <Grid container alignItems="center" direction="row" spacing={2}>
                    <Grid item xs={3} >
                        <Card className={classes.inputCard}>
                            <Grid container spacing={1}>

                                <Grid item xs={8}>
                            <Typography className={classes.inputTitle} variant="h5">Select Underlying Security</Typography>
                            <form onSubmit={this.onSearchSecurity}>
                                <TextField className={classes.inputTextField} label="Ticker" variant="standard" />
                                <Fab size="small" type="submit" >
                                    <SearchIcon />
                                </Fab>
                                    </form>
                                </Grid>
                                <Grid item xs={4}>
                                <Typography variant="h5">{tickerPrice}</Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item xs={9} />
                    <br />
                    <Grid item xs={3}>
                        <Card className={classes.inputCard} >
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Typography className={classes.inputTitle} variant="h5">Option (Leg 1)</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <label className={classes.selectLabel}>Direction</label>
                                </Grid>
                                <Grid item xs={6}>
                                    <Select className={classes.selectOptions} >
                                        <MenuItem value={"Buy"}>Buy</MenuItem>
                                        <MenuItem value={"Write"}>Write</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item xs={6}>
                                    <span className={classes.optionSelected}></span>
                                    <Button variant="contained" color="secondary" className={classes.selectOptionButton} disableElevation>
                                        Select Option
                                </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography>Jan 2020 Calls</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <label className={classes.selectLabel}>Price</label>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField className={classes.inputTextField} variant="standard" />
                                </Grid>
                                <Grid item xs={6}>
                                    <label className={classes.selectLabel}>Quantity</label>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField className={classes.inputTextField} variant="standard" />
                                </Grid>
                                <div className={classes.displayFlex}>


                                </div>
                                <div className={classes.displayFlex}>


                                </div>
                            </Grid>

                        </Card>
                    </Grid>

                </Grid>
                <Grid container direction="row">

                </Grid>
            </React.Fragment>

        )
    }
}


export default withTheme(withStyles(styles)(LongCall))