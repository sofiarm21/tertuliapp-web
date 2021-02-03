import Head from 'next/head'
import { Col, Row } from 'react-bootstrap'

import CoursesList from '../components/CoursesList'

function Courses() {
    return (
        <Row>
            <Col xs={12}>
                <CoursesList/>
            </Col>
        </Row>
    )
}

export default Courses
