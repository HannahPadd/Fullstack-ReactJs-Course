const Body = ({ text, number, deletePerson}) => {

    var display = text + ' ' + number
    return (
      <li>
        {display}
        <button onClick={deletePerson}>{'delete'}</button>
        </li>
    )
  }

export default Body