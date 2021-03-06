import React from 'react';
// import './Todo.css';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, ImageIcon, Button } from '@material-ui/core'
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
    return (
        <List className='todo__list'>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todoprop.todo} secondary={props.todoprop.timestamp}>
                </ListItemText>
            </ListItem>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todoprop.id).delete()} >Delete Me</DeleteForeverIcon>
        </List >
    )
}

export default Todo