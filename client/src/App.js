import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Student from './components/showStudent/showStudent.js';
import Create from './components/createStudent/createStudent.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container maxWidth="1g">
        <AppBar className={classes.AppBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Name Email Show</Typography>
        </AppBar>

        <Grow in>
          <Container>
            <Grid container justifyContent="space-between" alignItems="stretch">
              <Grid item xs={12} sm={7}>
                <AppBar className={classes.AppBar} position="static" color="inherit">
                  <Student/>
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
              <AppBar className={classes.AppBar} position="static" color="inherit">
                  <Create/>
                </AppBar>
            </Grid>

          </Grid>

      </Container>
    </Grow>
      </Container>
    </div>
  );
}

export default App;
