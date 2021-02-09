import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import { useQuery } from '@apollo/react-hooks'


import { GET_LECTURE_INFO } from '../operations/queries/LecturesQueries'
import LectureTile from './LectureTile'

const LectureOverview = (props) => {

    const {
        lectureInfo
    } = props

    return (
        <Row className='LectureOverview my-5'>
            <Col xs={12}>
                <Image
                    src={`https://tertuliapp.herokuapp.com${lectureInfo.cover[0].url}`}
                    fluid
                    className='mb-4'
                    style={{height: '500px', width:'100%'}}
                />
                <h1>
                    {`${lectureInfo.nombre}`}
                </h1>
                <p>
                    {`${lectureInfo.descripcion}`}
                </p>
            </Col>
        </Row>
    )
}

export default LectureOverview
