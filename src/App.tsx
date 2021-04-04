import React, {useEffect,useState} from 'react';
import { createMuiTheme, ThemeProvider, makeStyles, Grid, Paper, Container} from '@material-ui/core';
import { requestApi, Film } from './Omdb';
import Search from './components/Search';
import Library from './components/Library';
import HeaderMoovy from './components/HeaderMoovy';

// estilização css
const useStyles = makeStyles({
  App: {
    background: '#ece8e6',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  listMovies: {
    display: 'flex',
    justifyContent: 'start',
    maxWidth: '75%'
  },
  paper: {
    padding: '30px',
    textAlign: 'center',
    color: '#712104',
  }
})


function App() {

  const theme = createMuiTheme({
    palette:{
      primary:{
        main: '#d1cccc'
      },
      secondary:{
        main: '#712104'
      }
    },
    typography:{
      fontFamily: 'Inter, sans-serif',
      fontSize: 16

    }
    
  });

  const [apiMovies,setapiMovies] = useState<Film[]>([]);
  const [selection,setselection] = useState<string>('null');
 

  useEffect(() => {
    const execut = async () =>{
      let list: Array<Film> = await requestApi('avengers');
      setapiMovies(list);
    };
    execut();
  },[]);

  const classes = useStyles();
  /*
  return(
    <ThemeProvider theme = {theme}>
      <Grid container  direction='column' justify='center' alignItems='center'>
        <Grid container  justify='center' alignItems='center'>
          <Paper className={classes.paper}>1</Paper>
          <Paper className={classes.paper}>2</Paper>
        </Grid>
        <Grid container justify='center' alignItems='center'>
          <Paper className={classes.paper}>3</Paper>
          <Paper className={classes.paper}>4</Paper>
          <Paper className={classes.paper}>5</Paper>
          <Container maxWidth="sm">
            <Paper className={classes.paper}>6</Paper>
            <Paper className={classes.paper}>7</Paper>
          </Container>
          <Paper className={classes.paper}>7</Paper>
          <Paper className={classes.paper}>7</Paper>
        </Grid>

      </Grid>
    </ThemeProvider>

  );
  
 
  */
  return (
    <ThemeProvider theme = {theme}>
      <div style={{background: '#d1cccc'}}>
        <Grid container direction='column' justify='center' alignItems='center'>
          <HeaderMoovy setselection = {setselection}></HeaderMoovy>
            {selection === 'null'
              ? <p>teste null</p>
              : selection === 'search'
                ? <Search apiMovies = {apiMovies}/>
                : <Library/>
            }
        </Grid>
      </div>
    </ThemeProvider>
  );
  
  
  
}

export default App;
