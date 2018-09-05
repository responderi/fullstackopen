import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    lisaaHyva = () => {
        this.setState({
            hyva: this.state.hyva + 1
        })
    }

    lisaaNeutraali = () => {
        this.setState({
            neutraali: this.state.neutraali + 1
        })
    }

    lisaaHuono = () => {
        this.setState({
            huono: this.state.huono + 1
        })
    }
    
    render(){
        return (
            <div>
                <Otsikko />
                <Button toiminto={this.lisaaHyva} teksti="hyvä" />
                <Button toiminto={this.lisaaNeutraali} teksti="neutraali" />
                <Button toiminto={this.lisaaHuono} teksti="huono" />
                <Valiotsikko />
                <Statistics toiminto1={this.state.hyva} toiminto2={this.state.neutraali} toiminto3={this.state.huono} toiminto4={(this.state.hyva*1 + this.state.huono*(-1))/(this.state.hyva + this.state.huono + this.state.neutraali)} toiminto5={(this.state.hyva)/(this.state.hyva + this.state.huono + this.state.neutraali)*100}/>
            </div>
        )
    }
}

const Otsikko = () => {
    return (
        <h1>anna palautetta</h1>
    )
}

const Valiotsikko = () => {
    return (
        <h1>statistiikka</h1>
    )
}

const Button = (props) => {
    const {toiminto, teksti} = props
    return (
        <button onClick={toiminto}>
            {teksti}
        </button>
    )
} 

const Statistic = (props) => {
    const {teksti, toiminto, teksti2} = props
    return (
        <tbody>
            <tr>
                <td>{teksti}</td> 
                <td>{toiminto} {teksti2}</td>
            </tr>
        </tbody>
    )
}

const Statistics = (props) => {
    const {toiminto1, toiminto2, toiminto3, toiminto4, toiminto5} = props
    if (toiminto1 + toiminto2 + toiminto3 === 0 ) {
        return (
            <div>
                <p>ei yhtään palautetta annettu</p>
            </div>
        )
    }
    return (
        <div>
            <table>
                <Statistic teksti="hyvä" toiminto={toiminto1} />
                <Statistic teksti="neutraali" toiminto={toiminto2} />
                <Statistic teksti="huono" toiminto={toiminto3} />
                <Statistic teksti="keskiarvo" toiminto={toiminto4} />
                <Statistic teksti="positiivisia" toiminto={toiminto5} teksti2="%" />
            </table>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));