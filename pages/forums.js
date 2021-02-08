import Link from 'next/link'
import { Col, Row, Accordion, Card, Button, Badge } from 'react-bootstrap'

import CoursesList from '../components/CoursesList'

function Forums() {

    return (
        <Row>
            <Col xs={12}>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        LECCION
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Row>
                            <Col xs={12}>
                                <Card.Body>
                                    <Card.Title>
                                        TITULO <Badge pill variant={"primary"} className="text-white">2</Badge>
                                    </Card.Title>
                                    <Card.Text>
                                        Descripcion
                                    </Card.Text>
                                    <Card.Link className="text-dark">
                                        <Link href="/forum/1">
                                        Card Link
                                        </Link>
                                    </Card.Link>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Click me!
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Col>
        </Row>
        
    )
}

export default Forums