import { useState } from 'react'

const Header = () => {
  return (
    <div>
      <h1>give feedback</h1>
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}> {text} </button>
  )
}
const StatisticsLine = ({ text, value }) => {
  return (
    <p>{text} {value}</p>
  )
}
const Statistics = ({ good, neutral, bad }) => {
  if (good !== 0 || neutral !== 0 || bad !== 0) {
    return (
      <div>
        <StatisticsLine text='good' value={good} />
        <StatisticsLine text='neutral' value={neutral} />
        <StatisticsLine text='bad' value={bad} />
        <StatisticsLine text='all' value={good + neutral + bad} />
        <StatisticsLine text='average' value={(good + neutral + bad) / 3} />
        <StatisticsLine text='postitve' value={(good / (good + neutral + bad) * 100 + '%')} />
        <table>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{good + neutral + bad}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{(good + neutral + bad) / 3}</td>
        </tr>
        <tr>
          <td>postitve</td>
          <td>{(good / (good + neutral + bad) * 100 + '%')}</td>
        </tr>
      </table>
      </div>

    )
  }
  else {
    return (
      <p>No feedback given</p>
    )
  }
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const addGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    console.log('good:',good)
  }
  const addNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    console.log('neutral:', neutral)
  }

  const addBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    console.log('bad', bad)
  }
  return (
    <div>
      <Header />
      <Button handleClick={addGood} text='good' />
      <Button handleClick={addNeutral} text='neutral' />
      <Button handleClick={addBad} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
