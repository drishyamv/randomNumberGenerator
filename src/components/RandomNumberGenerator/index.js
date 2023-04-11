import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  generateRandomNumber = () => Math.ceil(Math.random() * 100)

  displayRandomNumber = () => {
    const randomNumber = this.generateRandomNumber()

    this.setState({
      count: randomNumber,
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="bg-card">
          <h1 className="heading">Random Number</h1>
          <p className="para-style">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generateBtn"
            onClick={this.displayRandomNumber}
          >
            Generate
          </button>
          <p className="randomNumber">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
