import React, { Component } from 'react'
import config from '../config'

const myHeaders = {
  'X-API-Key': config.PP_KEY
}

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
}

class BillShow extends Component {
  constructor() {
    super()
    this.state = ({
      bill: ''
    })
  }

  getBillInfo = (bill) => {
    fetch(`https://api.propublica.org/congress/v1/115/bills/${bill}.json`, myInit)
      .then(resp => resp.json())
      .then(resp => this.setState({
        bill: resp.results[0],
      }))
      .catch(error => console.log(error)) // investigate 'throw' - how to display error
  }

  componentDidMount() {
    this.getBillInfo(this.props.id)
  }

  render() {
    const bill = this.state.bill
    return (
      <div>
        <p>
          {bill.number} - {bill.title}
        </p>
        <p>
          Sponsor: {bill.sponsor_name}
        </p>
      </div>
    )
  }
}

export default BillShow
