import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

    const [persons, setPersons] = useState([])

    const hook = () => {
        console.log('effect')
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log('promise fulfilled')
                setPersons(response.data)
            })
    }

    useEffect(hook, [])
    console.log('render', persons, 'persons')
}
export default App
/*
const PersonForm = () => {
    return (
        <div>PersonFORM</div>
    )
}

const App = () => {
    const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: "040 1234567" }])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setNewFilter] = useState('')
    const changeName = (event) => {
        setNewName(event.target.value)
    }
    const changeNumber = (event) => {
        setNewNumber(event.target.value)
    }
    const addPerson = (event) => {
        event.preventDefault(); // prevent default form send action
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to the phonebook`)
            return;
        }
        setPersons(persons.concat({ name: newName, number: newNumber }))
        setNewName("")
        setNewNumber("")
        setNewFilter("")
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                {/*<div>filter: <input value={newFilter} onChange={changeFilter} /></div>//*}
                <PersonForm/>
                <div>name: <input value={newName} onChange={changeName} /></div>
                <div>number: <input value={newNumber} onChange={changeNumber} /></div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form >
            <h2>Numbers</h2>
            <ul>
                {persons.map((person, index) =>
                    <li key={index}>{person.name}; {person.number}</li>
                )}
            </ul>
        </div >
    );
}

export default App;




import { useState } from 'react'
import Note from './Note'

const App = (props) => {
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(false)

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            important: Math.random() > 0.5,
            id: notes.length + 1,
        }

        setNotes(notes.concat(noteObject))
        setNewNote('')
    }

    const handleNoteChange = (event) => {
        setNewNote(event.target.value)
    }

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important)

    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {notesToShow.map(note =>
                    <Note key={note.id} note={note} />
                )}
            </ul>
            <form onSubmit={addNote}>
                <input
                    value={newNote}
                    onChange={handleNoteChange}
                />
                <button type="submit">save</button>
            </form>
        </div>
    )
}
import Course from "./Course.jsx"
const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    return (
        <div>
            {courses.map(course => (
                <Course course={course} />
            ))}
        </div>
    )
}

export default App */