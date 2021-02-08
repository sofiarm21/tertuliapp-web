import { useRouter } from 'next/router'
import { Button, Col, Row } from 'react-bootstrap'

function Results() {

    const router = useRouter()
    const resultId = router.query.resultId
    console.log('router.query');
    console.log(router.query);
    console.log('resultId');
    console.log(resultId);

    return (
        <Row>
            <Col xs={12}>
                <h3>
                    {`Resultados de la evaluación`}
                </h3>
                {`${resultId}`}
            </Col>
        </Row>
    )
}

export default Results
