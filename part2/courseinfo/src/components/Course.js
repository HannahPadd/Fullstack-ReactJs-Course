const Course = (props) => {
    return (
      <div>
    <Content text={props.course.map(course => course.name)} parts={props.course.map(course => course.parts)} />
    </div>
    )
  }

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


const Content = ({ text, parts }) => {
return (
    <div>
    {<Header text={text[0]} />}
    {parts[0].map(part => <Part key={part.id} text={part.name} count={part.exercises} />)}
    {<Total parts={parts[0]} />}
    {<Header text={text[1]} />}
    {parts[1].map(part => <Part key={part.id} text={part.name} count={part.exercises} />)}
    {<Total parts={parts[1]} />}
    </div>
)
}

const Total = ({parts}) => {
const exerciseArr = parts.map(part => part.exercises)
return (
    <div>
    <b>total of {exerciseArr.reduce((total, item) => total + item)} exercises</b>
    </div>
)
}



export default Course