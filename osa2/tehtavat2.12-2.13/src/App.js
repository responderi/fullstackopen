import React from 'react'
import axios from 'axios'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: ''
    }
  }

  componentDidMount() {
    axios
      .get('http://restcountries.eu/rest/v2/all')
      .then(res => {
        this.setState({ countries: res.data })
      })
  }

  handleFilterChange = (event) => {
    console.log(event.target.value)
    this.setState({ filter: event.target.value })
  }
  
  render() {
    const contentToShow =
      this.state.countries.filter(country => country.name.toString().toLowerCase().includes(this.state.filter))
    return (
      <div>
        <div>
          find countries: <input
            value={this.state.filter}
            onChange={this.handleFilterChange}
          />
        </div>
        <div>
          {
            contentToShow.length > 10 ? 'too many matches, specify another filter'
              : contentToShow.length > 1 ? contentToShow.map(show => (
                <div>
                  {show.name}
                </div>
              ))
                : contentToShow.length === 1 ? contentToShow.map(show => (
                  <div>
                    <h2>{show.name}</h2>
                    <div>capital: {show.capital}</div>
                    <div>population: {show.population}</div>
                    <img alt={`${show.name} flag`} src={show.flag} width="200" />
                  </div>
                ))
                  : 'there was no results for your search'
          }
        </div>
      </div>
    )
  }
}

export default App;
