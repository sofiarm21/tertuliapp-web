import React from 'react'

import { Card, Col, Button, Row } from 'react-bootstrap'

const CourseTile = (props) => {

    const {
        course
    } = props

    console.log('course');
    console.log(course);
    console.log(process.env.NEXT_PUBLIC_API_URL);

    return (
        <Card>
            <Card.Img variant='top' src={`http://localhost:1337/${course.image[0].url}`} />
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
