import React, { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import './App.css';
import db from './firebase';

function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');

	//listen db and fetch todos
	useEffect(() => {
		db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
			setTodos(snapshot.docs.map(doc => ({ id: doc.id, timestamp: doc.data().timestamp.toDate().toString(), todo: doc.data().todo })))
		});

	}, [input])

	const addTodo = (event) => {
		event.preventDefault();
		// setTodos([...todos, input])
		db.collection('todos').add({
			todo: input,
			timestamp: new Date()
		})
		setInput('');
	}

	return (
		<div className="App">
			<h1>Hello From Dumidu Kasun</h1>
			<form >
				<FormControl>
					<InputLabel>✍ Write Your Todo</InputLabel>
					<Input type="text" value={input} onChange={event => setInput(event.target.value)} />
				</FormControl>
				<Button type="submit" onClick={addTodo} variant="contained" color="primary" disabled={!input} >
					ADD Todo
        		</Button>
			</form>

			<ul>
				{todos.map(todo => (
					<Todo todoprop={todo} />
				))}
			</ul>
		</div>
	);
}

export default App;
