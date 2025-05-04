import { useState, useEffect } from "react"
import personService from "./services/persons.js"
import Filter from "./components/Filter.jsx"
import PersonForm from "./components/PersonForm.jsx"
import Persons from "./components/Persons.jsx"

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")
    const [newFilter, setNewFilter] = useState("")

    const changeName = (event) => setNewName(event.target.value)
    const changeNumber = (event) => setNewNumber(event.target.value)
    const changeFilter = (event) => setNewFilter(event.target.value)

    const addPerson = (event) => {
        event.preventDefault()
        var newPerson = { name: newName, number: newNumber, id: Math.max(...persons.map(p => Number(p.id)) + 1) }
        if (persons.some(person => person.name === newName)) {
            newPerson.id = persons.find(person => person.name === newName).id
            if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
                personService
                    .update(newPerson.id, newPerson)
                    .then(updatePersons)
            }
            return
        }
        personService
            .create(newPerson)
            .then(updatePersons)
        setNewName("")
        setNewNumber("")
        setNewFilter("")
    }

    const removePerson = (id) => {
        if (!window.confirm(`Delete ${persons.find(person => person.id === id).name}?`)) return
        personService
            .remove(id)
            .then(updatePersons)
    }

    const updatePersons = () => {
        console.log("Updating persons ")
        personService
            .getAll()
            .then(allPersons => { setPersons(allPersons) })
    }

    const filteredPersons = persons.filter(person =>
        newFilter === "" || person.name.toLowerCase().includes(newFilter.toLowerCase())
    )

    useEffect(updatePersons, [])

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter value={newFilter} onChange={changeFilter} />
            <h3>Add a new</h3>
            <PersonForm
                onSubmit={addPerson}
                nameValue={newName}
                numberValue={newNumber}
                onNameChange={changeName}
                onNumberChange={changeNumber}
            />
            <h3>Numbers</h3>
            <Persons persons={filteredPersons} removeFunction={removePerson} />

        </div>
    )
}

export default App
