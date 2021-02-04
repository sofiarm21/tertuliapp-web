import React from 'react'
import { Col, Button, Row } from 'react-bootstrap'

const LectureTile = (props) => {

    const {
        lecture,
        index
    } = props

    return (
        <Row className='LectureTile my-5'>
            <Col xs={12}>
                <Row>
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
                                <Button variant='dark'>
                                    {`Comnezar lección`}
                                </Button>
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
            </Col>
        </Row>
    )
}

export default LectureTile
