import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useQuery } from '@apollo/react-hooks'


import CourseTile from './CourseTile'
import { GET_COURSES_INFO } from '../operations/queries/CoursesQueries'

const CoursesList = (props) => {

    const { loading: loadingCourses, error: errorCourses, data: dataCourses } = useQuery(GET_COURSES_INFO)

    if (errorCourses) return 'Error!'
    if (loadingCourses) return 'Loading...'

    const renderCourses = (courses) => {
        return courses.map(c => {
            return (
                <Col xs={4}>
                    <Row className='my-3'>
                        <Col xs={12}>
                            <CourseTile
                                course={c}
                            />
                        </Col>
                    </Row>
                </Col>
            )
        })
    }

    const { courses } = dataCourses

    return (
        <Row className='my-5'>
            {renderCourses(courses)}
        </Row>
    )
}

export default CoursesList
