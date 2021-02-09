import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'
import { Col, Row, Accordion, Card, Button, Badge, NavItem } from 'react-bootstrap'

import CoursesList from '../components/CoursesList'
import { GET_LECTURE_FORUMS } from '../operations/queries/LecturesQueries'

function Forums() {

    const { loading: loadingEntries, error: errorEntries, data: dataEntries } = useQuery(GET_LECTURE_FORUMS)


    if (errorEntries) return 'Error!'
    if (loadingEntries) return 'Loading...'

    const entradas = dataEntries

    return (
        <Row>
            <Col xs={12}>
            <Accordion defaultActiveKey="1">
                { dataEntries.lecciones.map( ({id,nombre,foros},index) => 
                foros.length > 0 && 
                <Card key={id}>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={id}>
                        {nombre}
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={id}>
                        <Row>
                            {foros.map( ({Titulo,Descripcion,id: idForo}) =>
                            <Col xs={12} key={idForo}>
                                <Card.Body>
                                    <Card.Title>
                                        {Titulo} 
                                        <Badge pill variant={"primary"} className="text-white">
                                            {/* TODO Este acceso no es el correcto si no es secuencial */}
                                            {dataEntries.entradasConnection.groupBy.foro[idForo - 1].connection.aggregate.count}
                                        </Badge>
                                    </Card.Title>
                                    <Card.Text>
                                        {Descripcion}
                                    </Card.Text>
                                    
                                    <Link href={`/forum/${idForo}`}>
                                        <Card.Link className="text-dark" href="">
                                            Ver Foro
                                        </Card.Link>
                                    </Link>
                                  
                                </Card.Body>
                            </Col>)
                            }
                        </Row>
                    </Accordion.Collapse>
                </Card>
                )
            }
            </Accordion>
            </Col>
        </Row>
        
    )
}

export default Forums