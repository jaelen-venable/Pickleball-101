import logo from './logo.svg';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import './App.css';
import { mergeClasses } from '@material-ui/styles';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.AppBar}></AppBar>
      </Container>

    </div>
  );
}

export default App;
