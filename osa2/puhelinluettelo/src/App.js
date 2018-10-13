import React from 'react';
import ListPersons from './components/ListPersons'
import AddPerson from './components/AddPerson'
import Filter from './components/Filter'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/persons')
      .then(res => {
        this.setState({ persons: res.data })
      })
  }

  addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    const searchPerson = this.state.persons.find(person => person.name === this.state.newName)
    if (!searchPerson) {
      const persons = this.state.persons.concat(personObject)
      this.setState({
        persons,
        newName: '',
        newNumber: ''
      })
    } else {
      alert('Tämä nimi on jo olemassa!')
      this.setState({
        newName: ''
      })
    }

  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  handleFilterChange = (event) => {
    console.log(event.target.value)
    this.setState({ filter: event.target.value })
  }

  render() {
    const personsToShow =
      this.state.persons.filter(person => person.name.toString().toLowerCase().includes(this.state.filter))
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Filter status={this.state.filter} change={this.handleFilterChange} />
        <AddPerson statusName={this.state.name} statusNumber={this.state.number} changeName={this.handleNameChange} changeNumber={this.handleNumberChange} add={this.addPerson} />
        <ListPersons persons={personsToShow} />
      </div>
    )
  }
}

export default App