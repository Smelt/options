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
import { Select, InputLabel } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'

class LongCall extends React.Component {


    onSearchSecurity = e => {
        e.preventDefault()
        console.log(e)
    }

    render() {

        const { classes, theme } = this.props
        return (
            <React.Fragment>
            <Grid container alignItems="center" direction="row" spacing={2}>
                <Grid item xs={3} >
                    <Card className={classes.inputCard}>
                        <Typography className={classes.inputTitle} variant="h5">Select Underlying Security</Typography>
                        <form onSubmit={this.onSearchSecurity}>
                            <TextField className={classes.inputTextField} label="Ticker" variant="standard" />
                            <Fab  size="small" type="submit">
                                <SearchIcon />
                            </Fab>
                        </form>
                        
                    </Card>
                </Grid>
                <Grid item xs={9}/>
                <br/>
                    <Grid item xs={3}>
                        <Card className={classes.inputCard} >
                            <Typography className={classes.inputTitle}  variant="h5">Option (Leg 1)</Typography>
                            <div className={classes.displayFlex}>
                            <Typography>Buy or Write</Typography>
                            <Select className={classes.inputTextField} >
                                <MenuItem value={"Buy"}>Buy</MenuItem>
                                <MenuItem value={"Write"}>Write</MenuItem>
                            </Select>
                            </div>
                        </Card>
                    </Grid>

            </Grid>
            <Grid container direction = "row">
                
            </Grid>
            </React.Fragment>

        )
    }
}


export default withTheme(withStyles(styles)(LongCall))