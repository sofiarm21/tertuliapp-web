import Head from 'next/head'
import Link from 'next/link'

import { Alert, Col, Button, Row } from 'react-bootstrap'

import styles from '../styles/Home.module.scss'

function Home() {
    return (
        <Row className='justify-content-md-center'>
          <Col xs={6}>
            <Alert color='primary'>
              Hello Project is strapi-next with Bootstrap
            </Alert>
            <Button color='primary'>Hello from nextjs</Button>
          </Col>
        </Row>
    )
}

export default Home
