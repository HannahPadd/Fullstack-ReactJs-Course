import { useState } from 'react';

const Body = (props) => {
  return (
    <div>
    <li>{props.text}</li>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
  ])
  const [numbers, setNumbers] = useState([
    { number: '040-1234567' },
  ])
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
    }
    console.log('personobject',personObject)
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addNumber = (event) => {
    event.preventDefault()
    if (numbers.some(number => number.number === newNumber)) {
      alert(`${newNumber} is already added to phonebook`)
      return
    }
    const numberObject = {
      number: newNumber,
    }
    setNumbers(numbers.concat(numberObject))
    setNewNumber('')
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addStuff = (event) => {
    event.preventDefault()
    addPerson(event)
    addNumber(event)
  }
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
        <div>
          debug: {newName}
        </div>
      <h2>Numbers</h2>
      {`${persons.map(person => <Body key={person.name} text={person.name} />)} ${numbers.map(number => <Body key={number.number} text={number.number} />)}`}
    </div>
  )
}

export default App;
