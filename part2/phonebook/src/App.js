import { useState, useEffect } from 'react';
import Body from './components/Body';
import axios from 'axios';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    personService.addPerson(personObject).then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
    })
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }


  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.deletePerson(id).then(returnedPerson => {
        setPersons(persons.filter(person => person.id !== id))
      }).catch(error => {
        alert(`the person '${persons.name}' was already deleted from server`)
      })
    }
  }

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])


  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          <form onSubmit={addPerson}> 
            <div>name: 
              <input 
                value={newName} 
                onChange={handlePersonChange} />
            </div>
            <div>number: 
              <input
                value={newNumber}
                onChange={handleNumberChange} />
            </div>
            <div><button type="submit">add</button></div>
          </form>
        </div>
      <h2>Numbers</h2>
      {persons.map(person => 
      <Body 
        key={person.name}
        text={person.name}
        number={person.number}
        deletePerson={() => deletePerson(person.id, person.name)}
        />)}
    </div>
  )
}  

export default App;
