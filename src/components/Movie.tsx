import {useState} from 'react';
import { Button,makeStyles,IconButton} from '@material-ui/core';
import PlayCircleFilledWhiteRoundedIcon from '@material-ui/icons/PlayCircleFilledWhiteRounded';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import AlertDialog from './AlertDialog';
type Props = {
    pai: boolean
    key: number
    title: string
    poster: string
    ratings: string
}

const useStyles = makeStyles({
    principal: {
        background: 'rgb(255, 255, 255)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '10px',
        margin: '5px',
        flexWrap: 'wrap'
    },
    
    img: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
        margin: '8px',
        minWidth: '245px',
        minHeight: '360px',
        backgroundSize: '245px'
    },

    bottonIcon:{
        fontSize: 100,
        color: 'rgb(255, 255, 255,0.5)'
    },
    
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
        
    },

    text:{
        fontFamily: 'Arial',
        fontSize: '20px',
        margin: '0',
        marginBottom: '5px'
    },
    ratings:{
        display: 'flex'
    },

    buttonRemove: {
        background: 'rgba(254, 109, 142, 1)',
        color: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '15px',
        width: '85%', 
        marginBottom: '8px' 
    },

    buttonAdd: {
        background: 'rgba(10, 207, 131, 1)',
        color: 'rgb(5, 122, 77)',
        borderRadius: '15px',
        width: '85%',
        marginBottom: '8px' 
    }
  })
// extensão vscode react code snippets criar codigo inicial, exemplo fsc

export default (props: Props) => {
    const classes = useStyles();

    const [open, setOpen] = useState<boolean>(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    return(
        <div className = {classes.principal}>
            <div className = {classes.img} style={{backgroundImage: `url(${props.poster})`,}}>
                {props.pai
                    ?   <div></div>
                    :   <IconButton aria-label="delete" >
                            <PlayCircleFilledWhiteRoundedIcon className={classes.bottonIcon}/>
                        </IconButton>
                }
            </div>
            
            <div className = {classes.title}>
                <p className = {classes.text}>{props.title}</p>
                <div className = {classes.ratings}>
                    <StarOutlinedIcon style={{color: '#FCC419'}}/>
                    <p className = {classes.text}>{props.ratings}</p>
                </div>
            </div>
            {
                props.pai 
                    ? <Button className={classes.buttonAdd} variant="contained" disableElevation>Add to my Library</Button>
                    : <Button onClick = {handleClickOpen} className={classes.buttonRemove} variant="contained" disableElevation>Remove</Button>
            }
            <AlertDialog open ={open}  setOpen ={setOpen}></AlertDialog>
        </div>
    );
}