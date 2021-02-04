import React from 'react'
import { Card, Col, Button, Row } from 'react-bootstrap'

const CourseTile = (props) => {

    const {
        course
    } = props

    return (
        <Card>
            <Card.Img
                variant='top'
                style={{ height: '18rem' }}
                src={`http://localhost:1337${course.image[0].url}`}
            />
            <Card.Body>
                <Card.Title>
                    {`${course.name}`}
                </Card.Title>
                <Card.Text>
                    {`${course.description}`}
                </Card.Text>
                <Button variant="primary">
                    {`Ver curso`}
                </Button>
            </Card.Body>
        </Card>
    )
}

export default CourseTile
