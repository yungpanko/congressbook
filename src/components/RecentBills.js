import React from 'react'
import { NavLink } from 'react-router-dom'
import { List, Button, Divider, Container } from 'semantic-ui-react'

const RecentBills = (props) => {
  let displayList = props.bills.map(bill => (
    <List.Item key={bill.number}><NavLink to={`/bills/${bill.bill_id.substr(0, bill.bill_id.indexOf('-'))}`}>
      {bill.number} - {bill.title}
    </NavLink></List.Item>))
  return (
    <Container>
      {'Chamber '}
    <Button.Group onClick={props.handleClick}>
      <Button value='both'>Both</Button>
      <Button value='house'>House</Button>
      <Button value='senate'>Senate</Button>
    </Button.Group>
    <Divider/>
    <List>
      {displayList}
    </List>
</Container>
  )
}

export default RecentBills
