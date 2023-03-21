import { useState, useEffect } from 'react'
import Body from './components/Body'
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([])
  console.log(persons)
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
    }
    console.log('personobject',personObject)
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handlePersonChange = (event) => {
    console.log(event)
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }


  const addStuff = (event) => {
    event.preventDefault()
    console.log('event', event)
    addPerson(event)
  }

  const hook = () => {
      axios.get('http://localhost:3001/persons').then(response => {
      setPersons(response.data)
    })
  }

  useEffect(hook, [])

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          <form onSubmit={addStuff}> 
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
      {persons.map(person => <Body key={person.name} text={person.name} number={person.number} />)}
    </div>
  )
}  

export default App;
