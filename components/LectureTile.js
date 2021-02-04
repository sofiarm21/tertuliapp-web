import React from 'react'
import Link from 'next/link'
import { Col, Button, Row } from 'react-bootstrap'

const LectureTile = (props) => {

    const {
        course,
        lecture,
        index
    } = props

    return (
        <Row className='LectureTile my-5'>
            <Col xs={11}>
                <Row>
                    <Col xs={12}>
                        <h3>
                            {`${lecture.orden}`}. {`${lecture.nombre}`}
                        </h3>
                    </Col>
                    <Col xs={12}>
                        {`${lecture.descripcion}`}
                    </Col>
                    <Col xs={12} className='my-3'>
                        <Link href={`/course/${course.id}/lecture/${lecture.id}`}>
                            <Button variant='dark'>
                                {`Comnezar lección`}
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Col>
            <Col xs={1}>
            {
                !(index % 2) &&
                <div
                    className='bg-dark'
                    style={{width: '1px', height: '100%'}}
                />
            }
            </Col>
        </Row>
    )
}

export default LectureTile
