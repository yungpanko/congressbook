import React from 'react'
import { Icon, Item } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


const CongresspersonVoteList = ({ votes }) => {
  const displayVotes = votes.map(vote => (
    <Item key={vote.roll_call}>
      <Item.Content>
        <Item.Header>
          { vote.bill.bill_uri ?
        <NavLink to={`/bills/${vote.bill.bill_uri.substring(vote.bill.bill_uri.indexOf('bills/') + 6, vote.bill.bill_uri.indexOf('.json'))}`}>
          {vote.question} for {vote.bill.title.replace(/&#39;/g,"'").replace(/&quot;/g,"'")}
        </NavLink> :
        vote.description }
        </Item.Header>
        <Item.Description>
          Date: {vote.date}
        </Item.Description>
        <Item.Description>
          Result: {vote.result} (YEAs: {vote.total.yes} NAYs: {vote.total.no})
        </Item.Description>
        <Item.Extra>
          {vote.position === 'Yes' ?
          <p>I voted yes <Icon color='green' name='thumbs up' /></p> :
          <p>I voted no <Icon color='red' name='thumbs down' /></p> }
        </Item.Extra>
      </Item.Content>
    </Item>
  ))
  return (
    <Item.Group>
      {displayVotes}
    </Item.Group>
  )
}

export default CongresspersonVoteList
