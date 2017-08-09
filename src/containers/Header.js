import React from 'react'
import { Header, Image, Container, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const PageHeader = (props) => {
  return (
    <Container textAlign='center'>
      <Menu text compact>
        <Menu.Item>
          <Link to='/house' exact><Image src='/house-logo.png' size='small' inline/></Link></Menu.Item>
        <Menu.Item>
          <Link to='/' exact>
            <Header as='h1' textAlign='center'>The 115th United States Congress</Header>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/senate' exact><Image src='/senate-logo.png' size='small' inline/>
        </Link>
      </Menu.Item>
    </Menu>
    </Container>
  )
}

export default PageHeader
