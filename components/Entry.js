import { useState } from 'react'
import { Card, Accordion, Button } from 'react-bootstrap'

import RichTextEditor from 'react-rte'
import showdown from 'showdown'


const Entry = ({contenido,created_at,id,usuario,respuesta}) => {

    const converter = new showdown.Converter()

    if (!contenido) return null

    const [responseEntry,setResponseEntry] = useState(RichTextEditor.createEmptyValue);

    return(
        <Card>
            <Card.Body>
                <Card.Title>
                    {usuario.username}
                </Card.Title>
                <Card.Subtitle className="text-muted">
                    {new Date(created_at).toString()}
                </Card.Subtitle>
                <Card.Text dangerouslySetInnerHTML={{__html: converter.makeHtml(contenido)}}/>
            </Card.Body>
            <Accordion>
                <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                        <Button variant="primary" className="text-white">
                            Responder
                        </Button>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <RichTextEditor editorStyle={{height: "10rem", fontFamily: "Segoe UI, sans-serif"}} 
                                value={responseEntry} 
                                onChange={(value)=> {setResponseEntry(value)} } 
                            />
                            <Button className="offset-11 text-white">
                                Publicar    
                            </Button>                
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
            { respuesta?.length > 0 &&
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="text-dark btn">
                    Ver Respuestas <span><i class="far fa-comment ml-2"></i> {respuesta.length} </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            {respuesta?.map( (item,index) => {
                                return <Entry key={index} {...item}/>
                            } )}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            }
        </Card>
    )
}

export default Entry