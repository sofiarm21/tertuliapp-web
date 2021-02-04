import Head from 'next/head'
import { Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'

import LecturesList from '../../components/LecturesList'

function Course() {
    const router = useRouter()
    const courseId = router.query.courseId

    return (
        <Row>
            <Col xs={12}>
                <LecturesList
                    courseId={courseId}
                />
            </Col>
        </Row>
    )
}

export default Course
