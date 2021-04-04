import React from 'react';
import './Search-Library.css';
import Movie from './Movie';
import { Film } from '../Omdb';
import { Container, makeStyles,InputBase,InputAdornment} from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
type Props = {
    apiMovies: Film[]
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

export default (props: Props) => {
    const classes = useStyles();
    return (
        <Container maxWidth = 'md'>
            <p className = {classes.p}>Search</p>
            <div className = {classes.divInput}>
                <InputBase className = {classes.input}
                    startAdornment={
                        <InputAdornment position="end">
                            <SearchOutlinedIcon/>
                        </InputAdornment>
                    }
                />
            </div>
            <div className = {classes.content}>
                {props.apiMovies.map((item,key) => (
                <Movie key={key} pai = {true} title = {item.title} poster = {item.poster} ratings ={item.ratings}></Movie>))
                }
            </div>
        </Container>
    );
}