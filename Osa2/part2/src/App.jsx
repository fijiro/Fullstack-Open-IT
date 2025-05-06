import { useState, useEffect } from "react"
import personService from "./services/persons.js"
import Filter from "./components/Filter.jsx"
import PersonForm from "./components/PersonForm.jsx"
import Persons from "./components/Persons.jsx"
import Notification from "./components/Notification.jsx"

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")
    const [newFilter, setNewFilter] = useState("")
    const [newMessage, setNewMessage] = useState("")
    const [isSuccess, setIsSuccess] = useState(true)
    const changeName = (event) => setNewName(event.target.value)
    const changeNumber = (event) => setNewNumber(event.target.value)
    const changeFilter = (event) => setNewFilter(event.target.value)

    const addPerson = (event) => {
        event.preventDefault()
        updatePersons()
        var newPerson = { name: newName, number: newNumber, id: String(Math.max(...persons.map(p => Number(p.id))) + 1) }
        if (newName === "" || newNumber === "") return
        if (persons.some(person => person.name === newName)) {
            newPerson.id = persons.find(person => person.name === newName).id
            if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
                personService
                    .update(newPerson.id, newPerson)
                    .then(updatePersons)
                    .then(() => {
                        setIsSuccess(true)
                        setNewMessage(`Updated ${newName}!`)
                        setTimeout(() => {
                            setNewMessage("")
                        }, 5000)
                    })

            }
            return
        }
        personService
            .create(newPerson)
            .then(updatePersons)
            .then(() => {
                setIsSuccess(true)
                setNewMessage(`Added ${newName}!`)
                setTimeout(() => {
                    setNewMessage("")
                }, 5000)
            })
        setNewName("")
        setNewNumber("")
        setNewFilter("")
    }

    const removePerson = async (id) => {
        const personToRemove = persons.find(p => p.id === id)
        const updatedPersons = await personService.getAll()
        setPersons(updatedPersons)

        if (!updatedPersons.some(person => person.id === personToRemove?.id)) {
            setIsSuccess(false)
            setNewMessage(`Information of ${personToRemove.name} has already been removed from the server`)
            setTimeout(() => setNewMessage(""), 5000)
            return
        }

        if (!window.confirm(`Delete ${personToRemove.name}?`)) return

        await personService.remove(id)
        updatePersons()
        setIsSuccess(true)
        setNewMessage(`Removed ${personToRemove.name}!`)
        setTimeout(() => setNewMessage(""), 5000)
    }
    
    const updatePersons = () => {
        console.log("Updating persons")
        personService.getAll().then(setPersons)
    }

    const filteredPersons = persons.filter(person =>
        newFilter === "" || person.name.toLowerCase().includes(newFilter.toLowerCase())
    )

    useEffect(updatePersons, [])

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={newMessage} success={isSuccess} />
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
