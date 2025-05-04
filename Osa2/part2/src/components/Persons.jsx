
const Persons = ({ persons, removeFunction }) => (
    <ul>
        {persons.map((person) => (
            <li key={person.id}>
                {person.name}; {person.number}
                <button onClick={() => removeFunction(person.id)}>remove</button>
            </li>
        ))}
    </ul>
);

export default Persons;
