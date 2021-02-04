import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useQuery } from '@apollo/react-hooks'


import { GET_COURSE_LECTURES } from '../operations/queries/CoursesQueries'
import LectureTile from './LectureTile'

const LecturesList = (props) => {

    const {
        courseId
    } = props

    const {
        loading: loadingLectures,
        error: errorLectures,
        data: dataLectures
    } = useQuery(GET_COURSE_LECTURES, {
        variables: {
            id: courseId
        }
    })

    if (errorLectures) return 'Error!'
    if (loadingLectures) return 'Loading...'

    const renderLectures = (props) => {
        const {
            course,
            lectures
        } = props
        return lectures.map((l, i) => {
            return (
                <Col xs={6}>
                    <LectureTile
                        course={course}
                        lecture={l}
                        index={i}
                    />
                </Col>
            )
        })
    }

    const { course } = dataLectures

    return (
        <Row className='my-5'>
            {renderLectures({
                course: course,
                lectures:course.lecciones
            })}
        </Row>
    )
}

export default LecturesList
