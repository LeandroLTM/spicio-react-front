import { makeStyles,} from '@material-ui/core';
type Props = {
   setselection: Function
}

export default (props: Props) => {
    const classes = useStyles();    
    return (
        <header className = {classes.header}>
            <p className = {classes.textMoovy}>Moovy</p>
            <div className = {classes.searchLibrary}>
                <p  className = {classes.clickText} 
                    onClick = {() => {props.setselection('search')} }
                    >
                    Search
                </p>
                <p className = {classes.clickText} onClick = {() => {props.setselection('library')}}>
                    My Library
                </p>
            </div>
        </header>
    );
}

const useStyles = makeStyles((theme)=>({
    header: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '50px',
      margin: '10px',
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize

    },

    textMoovy: {
        color: 'rgba(242, 145, 27, 1)'
    },
    
    searchLibrary: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginLeft: '40px',
        width: '20%',
        height: '100%'
    },

    clickText: {
        cursor: 'pointer',
        margin: '0'
    }

  }))