import axios from 'axios'
import { Component } from 'react'


export default class FetchCats extends Component {
    constructor(props){
        super(props)
        this.state = {
            averageWeight: 0,
            averageLifeSpan: 0
        }
    }

    componentDidMount() {
        // Make a GET request to fetch cat breeds data from the API
        axios.get('https://api.thecatapi.com/v1/breeds')
        .then(response => {
            const breeds = response.data
            const totalBreeds = breeds.length


            // Calculate the avg weight of cat breeds
            const weightSum = breeds.reduce((sum, breed) => {
                const { weight } = breed
                const metricWeight = weight.metric
                const weightValues = metricWeight.split(' - ')
                const minWeight = parseFloat(weightValues[0])
                const maxWeight = parseFloat(weightValues[1])
                const avgWeight = (minWeight + maxWeight) / 2
                return sum + avgWeight
            }, 0)

            const averageWeight = (weightSum / totalBreeds).toFixed(2)


            // Calculate the avg life span of cat breeds
            const lifeSpanSum = breeds.reduce((sum, breed) => {
                const { life_span } = breed
                const lifeSpanValues = life_span.split(' - ')
                const minLifeSpan = parseFloat(lifeSpanValues[0])
                const maxLifeSpan = parseFloat(lifeSpanValues[1])
                const avgLifeSpan = (minLifeSpan + maxLifeSpan) / 2
                return sum + avgLifeSpan
            }, 0)

            const averageLifeSpan = (lifeSpanSum / totalBreeds).toFixed(2)

            // Update the state with the calculated averages
            this.setState({
                averageWeight: averageWeight,
                averageLifeSpan: averageLifeSpan
            })

            // console.log('Average Weight: ', averageWeight)
            // console.log('Average LifeSpan: ', averageLifeSpan)
        })
        .catch(error => {
            console.error(error)
        })
    }
  render() {

    const { averageWeight, averageLifeSpan } = this.state
    return (
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#00FFFF", height: "100%", width: "100%"}}>
        <h1 style={{fontSize: "40px"}}>30 Days Of React</h1>
        <h2 style={{fontFamily: "'Rochester', cursive", fontSize: "36px"}}>Cats Paradise</h2>
        <p style={{fontFamily: "'Rochester', cursive", fontSize: "24px", fontWeight: "lighter"}}>There are 67 cat breeds</p>
        <div style={{fontFamily: "'Rochester', cursive", fontSize: "24px", fontWeight: "lighter"}}>On average a cat can weight about <div className='textBorder'><span id='textCat1'>{averageWeight}</span></div> kg and can live <div className='textBorder'><span id='textCat2'>{averageLifeSpan}</span></div> years.</div>
      </div>
    )
  }
}
