import React, { Component } from 'react'
import config from '../config'
import CongresspersonVoteList from '../components/CongresspersonVoteList'
import RecentStatements from '../components/RecentStatements'
// import { NavLink } from 'react-router-dom'

const myHeaders = {
  'X-API-Key': config.PP_KEY
}

const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
}


class CongresspersonShow extends Component {
  constructor() {
    super()
    this.state = ({
      member: '',
      votes: '',
      statements: '',
      bills: ''
    })
  }

  getMember = (member) => {
    fetch(`https://api.propublica.org/congress/v1/members/${member}.json`, myInit)
      .then(resp => resp.json())
      .then(resp => this.setState({
        member: resp.results[0]
      }))
      .catch(error => console.log(error)) // investigate 'throw' - how to display error
  }

  getVotes = (member) => {
    fetch(`https://api.propublica.org/congress/v1/members/${member}/votes.json`, myInit)
      .then(resp => resp.json())
      .then(resp => this.setState({
        votes: resp.results[0].votes
      }))
      .catch(error => console.log(error)) // investigate 'throw' - how to display error
  }

  getStatements = (member) => {
    fetch(`https://api.propublica.org/congress/v1/members/${member}/statements/115.json`, myInit)
      .then(resp => resp.json())
      .then(resp => this.setState({
        statements: resp.results
      }))
      .catch(error => console.log(error)) // investigate 'throw' - how to display error
  }

  getBills = (member) => {
    fetch(`https://api.propublica.org/congress/v1/members/${member}/bills/cosponsored.json`, myInit)
      .then(resp => resp.json())
      .then(resp => this.setState({
        bills: resp.results
      }))
      .catch(error => console.log(error)) // investigate 'throw' - how to display error
  }

  componentDidMount() {
    this.getMember(this.props.member)
    this.getVotes(this.props.member)
    this.getStatements(this.props.member)
    this.getBills(this.props.member)
  }

  render() {
    let display
    let twitter
    let member = this.state.member
    let votes = this.state.votes
    let statements = this.state.statements
    let bills = this.state.bills
    debugger
    if (member && votes) {
      const middle = member.middle_name ? " " + member.middle_name + " " : " "
      if (member.twitter_account) {
        twitter = <a href={`https://twitter.com/${member.twitter_account}`} target="_blank">@{member.twitter_account}</a>
      }
      display = (
        <div>
          <p>
            {member.first_name + middle + member.last_name} ({member.current_party})
          </p>
          <p>{twitter}</p>
          <p>Website: {member.url}</p>
          <p>Current Role: {member.roles[0].title} - {member.roles[0].state} {member.roles[0].district ? member.roles[0].district : ''}</p>
          <p>Start Date: {member.roles[0].start_date}</p>
          <p>End Date: {member.roles[0].end_date}</p>
          <RecentStatements statements={statements}/>
          <CongresspersonVoteList votes={votes}/>
        </div>
      )
    } else {
      display = <div>Loading...</div>
    }
    return display
  }
}

export default CongresspersonShow
