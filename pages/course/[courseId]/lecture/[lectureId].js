import Head from 'next/head'
import { Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'

import LectureOverview from '../../../../components/LectureOverview'


function Lecture() {
    const router = useRouter()
    const lectureId = router.query.lectureId

    return (
        <Row>
            <Col xs={12}>
                <LectureOverview lectureId={lectureId}/>
                <hr/>
            </Col>
        </Row>
    )
}

export default Lecture
