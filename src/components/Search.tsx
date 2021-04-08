import React, { useState } from 'react';
import './Search-Library.css';
import Movie from './Movie';
import { Container, makeStyles,InputBase,InputAdornment,IconButton} from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Server } from '../NestApi';
import { requestApi } from '../Omdb';
type Props = {
}

export default (props: Props) => {

    const [inputValor, setinputValor] = useState<string>('');

    // Função resgata o valor do input a medida que o usuário digita
    const event = (even: React.ChangeEvent<HTMLInputElement>)=> {
        setinputValor(even.target.value);
    } 

    const [apiMovies,setapiMovies] = useState<Server[]>([]);
    const buntoInput = async () =>{
        let listOMDB: Array<any> = await requestApi(inputValor);
        setapiMovies(listOMDB);
    }


    const classes = useStyles();
    const [apiPost, setApiPost] = useState<boolean>(false);
    return (
        <Container maxWidth = 'md'>
            <p className = {classes.p}>Search</p>
            {apiPost 
                ? <p>Matrix I added to your Library</p> 
                : <p></p>
            }
            <div className = {classes.divInput}>
                <InputBase className = {classes.input}
                    value = {inputValor}
                    onChange = {event}
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton aria-label="delete" onClick = {buntoInput} >
                                <SearchOutlinedIcon/>
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </div>
            <div className = {classes.content}>
                {apiMovies.map((item,key) => (
                <Movie key={key} pai = {true} item = {item} setApiPostDelete ={setApiPost}></Movie>))
                }
            </div>
        </Container>
    );
}


const useStyles = makeStyles({
    divInput: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '10px'
    },
    input: {
        width: '40%',
        height: '30px',
        border: '1px solid #DEDEDE',
        boxSizing: 'border-box',
        borderRadius: '15px',
        background: 'rgb(255,255,255)'
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    p: {
        fontSize: '25px',
    }
  })