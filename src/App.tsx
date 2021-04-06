import React, {useState} from 'react';
import { createMuiTheme, ThemeProvider, makeStyles, Grid, Paper, Container} from '@material-ui/core';
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

  const [selection,setselection] = useState<string>('null');


  const classes = useStyles();
 
  return (
    <ThemeProvider theme = {theme}>
      <div style={{background: '#d1cccc'}}>
        <Grid container direction='column' justify='center' alignItems='center'>
          <HeaderMoovy setselection = {setselection}></HeaderMoovy>
            {selection === 'null'
              ? <p>teste null</p>
              : selection === 'search'
                ? <Search/>
                : <Library/>
            }
        </Grid>
      </div>
    </ThemeProvider>
  );
  
  
  
}

export default App;
