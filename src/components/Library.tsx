import React,{useState,useEffect} from 'react';
import {makeStyles, Container} from '@material-ui/core';
import Movie from './Movie';
import {Server,requestApiGetAll, requestApiDelete} from '../NestApi';
type Props = {
    
}

export default (props: Props) => {
    const [apiMovies,setapiMovies] = useState<Server[]>([]);
    const [apiDelete,setApiDelete] = useState<string>('');

    useEffect(() => {
        const execut = async () =>{
            let list: Array<Server> = await requestApiGetAll();
            setapiMovies(list);
        };
        execut();
    },[]);

 
    const executeDelete = async ()=>{
        if(apiDelete !== ''){
            console.log("Delete: " + apiDelete)
            setApiDelete('');
            await requestApiDelete(apiDelete);
            let filterApiMovies: Server[] = apiMovies.filter((value)=>value._id !== apiDelete);
            setapiMovies(filterApiMovies);
        }
    };
    executeDelete();


    const classes = useStyles();
    return (
        <Container maxWidth = 'md'>
            <p className = {classes.p}>My Library</p>
            <div className = {classes.content}>
                {apiMovies.length == 0
                ? <p>Biblioteca vazia</p>
                : apiMovies.map((item,key) => (<Movie key={key} pai = {false} item = {item} setApiPostDelete = {setApiDelete}></Movie>))
                }
            </div>
        </Container>
    );
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