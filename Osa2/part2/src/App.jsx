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

    useEffect(() => {
        personService.getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])

    const changeName = (event) => setNewName(event.target.value)
    const changeNumber = (event) => setNewNumber(event.target.value)
    const changeFilter = (event) => setNewFilter(event.target.value)

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to the phonebook`)
            return
        }
        const newPerson = { name: newName, number: newNumber, id: String(persons.length) }
        setPersons(persons.concat(newPerson))
        personService.create(newPerson)
        setNewName("")
        setNewNumber("")
        setNewFilter("")
    }

    const filteredPersons = persons.filter(person =>
        newFilter === "" || person.name.toLowerCase().includes(newFilter.toLowerCase())
    )

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
            <Persons persons={filteredPersons} />
        </div>
    )
}

export default App
