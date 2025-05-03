const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": "1"
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": "2"
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": "3"
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": "4"
    }
]

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    response.send(`Phonebook has info for ${persons.length} people 
        <br><br>
        ${new Date()}`
    );
    response.send()
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.find(person => person.id === id)
    if (person) { response.json(person) } else { response.status(404).end() }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const randomId = generateId()
    while (persons.some(person => person.id === randomId)) {
        randomId = generateId()
        if (persons.length === 80) {
            response.status(400).send("No more ids available")
            return
        }
    }
    const person = request.body
    person.id = randomId
    if (!person.name || !person.number) {
        return response.status(400).json({
            error: 'name or number missing'
        })
    }
    else if (persons.some(p => p.name === person.name)) {
        return response.status(400).json({
            error: `${person.name} is already added to the phonebook`
        })
    }
    persons = persons.concat(person)
    response.json(person)
})

const generateId = () => {
    return Math.floor(Math.random() * 100)
}
