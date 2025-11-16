import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: 1, number: "3442-300665" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const personExists = (name) => {
    return persons.some((person) => person.name === name);
  };

  const addNameAndNumber = (e) => {
    e.preventDefault();
    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };

    if (personExists(personObject.name)) {
      alert(`${newName} is already on the phonebook`);
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
    }
  };

  const handlePersonChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNameAndNumber}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name}, {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
