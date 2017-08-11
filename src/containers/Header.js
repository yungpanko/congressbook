import React from 'react'
import { Header, Image, Container } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

const PageHeader = (props) => {
  return (
    <Container textAlign='center'>
      <div className='ui menu text compact'>
          <NavLink className='item' to='/house' exact><Image src='/house-logo.png' size='small' inline/></NavLink>
          <NavLink className='item' to='/' exact>
            <Header as='h1' textAlign='center'>The 115th United States Congress</Header>
          </NavLink>
          <NavLink className='item' to='/senate' exact><Image src='/senate-logo.png' size='small' inline/>
        </NavLink>
      </div>
    </Container>
  )
}

export default PageHeader
