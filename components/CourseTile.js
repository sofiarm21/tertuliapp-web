import React from 'react'
import Link from 'next/link'
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
                src={`https://tertuliapp.herokuapp.com${course.image[0].url}`}
            />
            <Card.Body>
                <Card.Title>
                    {`${course.name}`}
                </Card.Title>
                <Card.Text>
                    {`${course.description}`}
                </Card.Text>
                <Link href={`/course/${course.id}`}>
                    <Button variant='primary'>
                        {`Ver curso`}
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default CourseTile
