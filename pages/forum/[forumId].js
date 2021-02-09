
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { Col, Row, Accordion, Card, Button, Badge, ListGroup, ListGroupItem } from 'react-bootstrap'

import Entry from '../../components/Entry'
import { GET_FORUM_ENTRIES } from '../../operations/queries/ForumsQueries'


function Forum() {

    const router = useRouter()
    const forumId = router.query.forumId

    const { loading: loadingEntries, error: errorEntries, data: dataEntries } = useQuery(GET_FORUM_ENTRIES, {variables: {id: forumId}})

    if (errorEntries) return 'Error!'
    if (loadingEntries) return 'Loading...'

    const entradas = dataEntries.foro.entradas

    console.log(entradas)

    return (
        
        <Row>
                <Col>
                    {entradas.map( (item,index) => {
                        if (!item.responde) return <Entry key={index} {...item}/>
                    })}
                </Col>
        </Row>
    )
}

export default Forum