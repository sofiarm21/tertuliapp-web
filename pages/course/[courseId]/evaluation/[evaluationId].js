import { Button, Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'

import QuestionAnswersSection from '../../../../components/QuestionAnswersSection'
import { GET_EVALUATION_DATA } from '../../../../operations/queries/EvaluationQueries'


function Evaluation() {

    const router = useRouter()
    const evaluationId = router.query.evaluationId


    const {
        loading: loadingEvaluation,
        error: errorEvaluation,
        data: dataEvaluation
    } = useQuery(GET_EVALUATION_DATA, {
        variables: {
            id: evaluationId
        }
    })

    if (errorEvaluation) return `Error ${errorEvaluation}`
    if (loadingEvaluation) return 'Loading...'

    const renderQuestionWithAnwers = (props) => {
        const {
            questions
        } = props
        return questions.map(q => {
            return (
                <QuestionAnswersSection
                    question={q}
                    answers={q.respuestas}
                />
            )
        })
    }

    const { evaluacion } = dataEvaluation
    const { preguntas } = evaluacion

    return (
        <Row className='Evaluation my-5'>
            <Col xs={12}>
                <h3>
                    {`Realizar evaluación ${evaluationId}`}
                </h3>
                {renderQuestionWithAnwers({
                    questions: preguntas
                })}
            </Col>
        </Row>
    )
}

export default Evaluation
