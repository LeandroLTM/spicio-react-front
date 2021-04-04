import React,{useState,useEffect} from 'react';
//import './Search-Library.css';
import {makeStyles, Container} from '@material-ui/core';
import Movie from './Movie';
import {Server,requestServer} from '../Server';
type Props = {
    
}

const useStyles = makeStyles({
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
    const [apiMovies,setapiMovies] = useState<Server[]>([]);

    useEffect(() => {
        const execut = async () =>{
        let list: Array<Server> = await requestServer();
        setapiMovies(list);
        };
        execut();
    },[]);

    const classes = useStyles();
    return (
        <Container maxWidth = 'md'>
            <p className = {classes.p}>My Library</p>
            <div className = {classes.content}>
                {apiMovies.map((item,key) => (
                <Movie key={key} pai = {false} title = {item.title} poster = {item.poster} ratings ={item.ratings}></Movie>))
                }
            </div>
        </Container>
    );
}