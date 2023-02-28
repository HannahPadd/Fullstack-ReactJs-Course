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
      {props.parts.map(part => <Part key={part.id} text={part.name} count={part.exercises} />)}
    </div>
  )
}

const Total = (props) => {
  const exerciseArr = props.parts.map(part => part.exercises)
  return (
    <div>
      <p>total of {exerciseArr.reduce((total, item) => total + item)} exercises</p>
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header text={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}

const App = () => {
  const courses = [
    {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]
  return <Course course={course} />
}


export default App;
