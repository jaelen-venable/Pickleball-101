import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import './App.css';
// eslint-disable-next-line
import { classes } from '@material-ui/styles';
import useStyles from './styles';




function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Container maxWidth="1g">
        <AppBar className={classes.AppBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center"> list Create & Show  </Typography>
        </AppBar>
      </Container>

    <Grow in> 
      <Container>
        <Grid container justify="space-between" alignItems='strect'>
          <Grid item xs={12} sm={7}>
            <AppBar className={classes.AppBar} position="static" color="inherit">
              <list />
        </AppBar>
      </Grid>
      <Grid item xs={12} sm={4}>
      <AppBar className={classes.AppBar} position="static" color="inherit">
        
      </AppBar>

      </Grid>

      </Grid>

    </Container>
    </Grow>


</div>
  
  
  );
}


export default App;
