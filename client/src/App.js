import logo from './logo.svg';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import list from './components/showlist/showlist.';
import './App.css';
import { mergeClasses } from '@material-ui/styles.';
import Grid from '@material-ui/core';
import { Grow } from '@mui/material';
import Create from './components/createList.js'

function App() {
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
        <Create />
      </AppBar>

      </Grid>

      </Grid>

    </Container>



    </div>
  );
}

export default App;
