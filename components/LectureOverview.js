import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import { useQuery } from '@apollo/react-hooks'


import { GET_LECTURE_INFO } from '../operations/queries/LecturesQueries'
import LectureTile from './LectureTile'

const LectureOverview = (props) => {

    const {
        lectureId
    } = props

    const {
        loading: loadingLecture,
        error: errorLecture,
        data: dataLecture
    } = useQuery(GET_LECTURE_INFO, {
        variables: {
            id: lectureId
        }
    })

    if (errorLecture) return 'Error!'
    if (loadingLecture) return 'Loading...'

    const { leccione } = dataLecture

    return (
        <Row className='LectureOverview my-5'>
            <Col xs={12}>
                <Image
                    src={`http://localhost:1337${leccione.cover[0].url}`}
                    fluid
                    className='mb-4'
                    style={{height: '500px', width:'100%'}}
                />
                <h1>
                    {`${leccione.nombre}`}
                </h1>
                <p>
                    {`${leccione.descripcion}`}
                </p>
            </Col>
        </Row>
    )
}

export default LectureOverview
