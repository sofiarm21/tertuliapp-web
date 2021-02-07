import Head from 'next/head'
import { Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'

import LecturesList from '../../components/LecturesList'
import EvaluationsList from '../../components/EvaluationsList'

function Course() {

    const router = useRouter()
    const courseId = router.query.courseId


    return (
        <Row className='my-5'>
            <Col xs={12}>
                <h3>
                    {`Realizar las evaluaciones del módulo`}
                </h3>
                <EvaluationsList
                    courseId={courseId}
                />
            </Col>
            <Col xs={12}>
                <LecturesList
                    courseId={courseId}
                />
            </Col>
        </Row>
    )
}

export default Course
