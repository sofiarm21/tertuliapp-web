import React from 'react'
import Link from 'next/link'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useQuery } from '@apollo/react-hooks'


import { GET_COURSE_EVALUATIONS } from '../operations/queries/CoursesQueries'
import LectureTile from './LectureTile'

const EvaluationsList = (props) => {

    const {
        courseId
    } = props

    const {
        loading: loadingEvaluations,
        error: errorEvaluations,
        data: dataEvaluations
    } = useQuery(GET_COURSE_EVALUATIONS, {
        variables: {
            id: courseId
        }
    })

    if (errorEvaluations) return `Error ${errorEvaluations}`
    if (loadingEvaluations) return 'Loading...'

    const renderEvaluations = (props) => {
        const {
            evaluations
        } = props
        return evaluations.map(e => {
            return (
                <Col xs={6}>
                    <Card
                        bg='primary'
                        text={'primary'.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className='mb-2'
                    >
                        <Card.Header>
                            {`Evalución`}
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>
                                {`${e.titulo}`}
                            </Card.Title>
                            <Card.Text>
                                {`${e.descripcion}`}
                            </Card.Text>
                            <Link href={`/course/${course.id}/evaluation/${e.id}`}>
                                <Button variant='light'>
                                    {`Realizar evaluación`}
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    }
    const { course } = dataEvaluations

    return (
        <Row className='my-5'>
            {renderEvaluations({
                evaluations: course.evaluaciones
            })}
        </Row>
    )
}

export default EvaluationsList
