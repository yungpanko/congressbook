import React, { Component } from 'react'
import config from '../config'
import { NavLink } from 'react-router-dom'

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
    let chamber
    if (bill.type === 's') {
      chamber = 'senate'
    } else {
      chamber = 'house'
    }
    let display
    // debugger
    if (bill.number) {
      display = (
        <div>
        <p>
          {bill.number} - {bill.title}
        </p>
        <p>
          Sponsor: <NavLink to={`/${chamber}/${bill.sponsor_id}`}>{bill.sponsor} - {bill.sponsor_state} ({bill.sponsor_party})</NavLink> (Introduced on {bill.introduced_date})
        </p>
        <p>
          Primary Subject: {bill.primary_subject}
        </p>
        <p>
          Committees: {bill.committees}
        </p>
        <p>
          Latest Action: ({bill.latest_major_action_date}) {bill.latest_major_action}
        </p>
        <p>
          Votes: There have been {bill.votes ? bill.votes.length : ''} vote(s)
          <br></br>
          {bill.votes.map(vote => (
            <div>
              <p>{vote.chamber} vote: {vote.question} ({vote.date})</p>
              <p>Result: {vote.result}</p>
              <p>Yays {vote.total_yes} to Nays {vote.total_no}</p>
              <p>{vote.total_not_voting} members did not vote</p>
            </div>
          ))}
        </p>
        <p>
          {bill.summary ? bill.summary : 'no summary'}
        </p>
      </div>)
    } else {
      display = (<div>Loading...</div>)
    }
    return display
  }
}

export default BillShow
