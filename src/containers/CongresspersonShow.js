import React, { Component } from 'react'
import config from '../config'
import CongresspersonVoteList from '../components/CongresspersonVoteList'
import RecentStatements from '../components/RecentStatements'
import { Loader, Grid, Icon, Header } from 'semantic-ui-react'

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
      bills: '',
      headshot: ''
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
        bills: resp.results[0].bills
      }))
      .catch(error => console.log(error)) // investigate 'throw' - how to display error
  }

  getHeadshot = (member) => {
    this.setState({
      headshot: `http://bioguide.congress.gov/bioguide/photo/${this.props.member.charAt(0)}/${this.props.member}.jpg`
    })
  }

  componentDidMount() {
    this.getMember(this.props.member)
    this.getVotes(this.props.member)
    this.getStatements(this.props.member)
    this.getBills(this.props.member)
    this.getHeadshot(this.props.member)
  }

  picError = () => {
    this.setState({
      headshot: '/dummy-profile-pic.png'
    })
  }

  render() {
    let display = (<div><br></br><Loader active inline='centered'/></div>)
    let twitter
    let facebook
    let member = this.state.member
    let votes = this.state.votes
    let statements = this.state.statements
    let bills = this.state.bills
    if (member && votes) {
      const middle = member.middle_name ? " " + member.middle_name + " " : " "
      if (member.twitter_account) {
        twitter = <span><Icon name="twitter"/><a href={`https://twitter.com/${member.twitter_account}`} target="_blank">@{member.twitter_account}</a><br></br></span>
      }
      if (member.facebook_account) {
        facebook = <span><Icon name="facebook"/><a href={`https://facebook.com/${member.facebook_account}`} target="_blank">{member.facebook_account}</a><br></br></span>
      }
      debugger
      display = (
        <div>
          <Grid fluid>
            <Grid.Column width={4}>
              <img alt={this.props.member} className='left floated medium ui image' src={this.state.headshot} onError={this.picError.bind(this)}/>
            </Grid.Column>
            <Grid.Column width={12}>
              <Header as='h2'>{member.first_name + middle + member.last_name} ({member.current_party})</Header>
              {twitter}
              {facebook}
              <a href={member.url} target='_blank'>{member.url}</a>
              <br></br>
              <br></br>
              <p>Current Role: {member.roles[0].title} - {member.roles[0].state} {member.roles[0].district ? member.roles[0].district : ''}</p>
              <p>Start Date: {member.roles[0].start_date}</p>
              <p>End Date: {member.roles[0].end_date}</p>
            </Grid.Column>
          </Grid>
          <RecentStatements statements={statements}/>
          <CongresspersonVoteList votes={votes}/>
        </div>
      )
    }
    return display
  }
}

export default CongresspersonShow
