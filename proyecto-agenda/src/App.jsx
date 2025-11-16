import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: 1 }]);
  const [newName, setNewName] = useState("");

  const personExists = (name) => {
    return persons.some((person) => person.name === name);
  };

  const addName = (e) => {
    e.preventDefault();
    const personObject = {
      id: persons.length + 1,
      name: newName,
    };

    if (personExists(personObject.name)) {
      alert(`${newName} is already on the phonebook`);
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
    }
  };

  const handlePersonChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
