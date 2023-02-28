const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.text} {props.count}</p>
    </div>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part text={props.parts[0].name} count={props.parts[0].exercises} />
      <Part text={props.parts[1].name} count={props.parts[1].exercises} />
      <Part text={props.parts[2].name} count={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]

  return (
    <div>
      <Header text={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}


export default App;
