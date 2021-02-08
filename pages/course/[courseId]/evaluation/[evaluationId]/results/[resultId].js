import { useRouter } from 'next/router'
import Link from 'next/link'
import { Button, Col, Row, ProgressBar } from 'react-bootstrap'
import { useQuery } from '@apollo/react-hooks'

import { GET_RESULTS_WITH_DATA } from '../../../../../../operations/queries/ResultsQueries'
import { GET_EVALUATION_DATA } from '../../../../../../operations/queries/EvaluationQueries'



function Results() {

    const router = useRouter()
    const resultId = router.query.resultId
    const evaluationId = router.query.evaluationId

    console.log('evaluationId');
    console.log(evaluationId);

    const {
        loading: loadingResult,
        error: errorResult,
        data: dataResult
    } = useQuery(GET_RESULTS_WITH_DATA, {
        variables: {
            id: resultId
        }
    })

    const {
        loading: loadingEvaluation,
        error: errorEvaluation,
        data: dataEvaluation
    } = useQuery(GET_EVALUATION_DATA, {
        variables: {
            id: evaluationId
        }
    })

    const renderBestAnswer = ({answers, userAnswer}) => {
        return answers.map((a,i) => {
            if (a.valoracion > 0) {
                return (
                    <>
                        <h5>
                            {`Respuesta más indicada:`}
                        </h5>
                        <p>
                            {`${a.mensaje}`}
                        </p>
                        <h5>
                            {`Respuesta seleccionada:`}
                        </h5>
                        <p>
                            {`${userAnswer.respuesta.mensaje}`}
                        </p>
                    </>
                )
            }

        })
    }

    const renderQuestionAnswer = ({questions, userAnswers}) => {
        return questions.map((q, i) => {
            return (
                <Row className='my-3'>
                    <Col xs={12}>
                        <h4>
                            {`Pregunta ${i}:`}
                        </h4>
                        <p>
                            {`${q.pregunta}`}
                        </p>
                        {renderBestAnswer({answers: q.respuestas, userAnswer: userAnswers[i]})}
                    </Col>
                </Row>
            )
        })
    }

    if (errorResult || errorEvaluation) return `Error ${errorEvaluation}`
    if (loadingResult || loadingEvaluation) return 'Loading...'


    const { resultado } = dataResult
    const { evaluacion } = dataEvaluation


    const successPercentage = ((resultado.calificacion * 100) / resultado.respuestas_resultados.length) / 2 + 50


    return (
        <Row className='Results my-5'>
            <Col xs={12}>
                <h2 className='text-dark my-4'>
                    {`Resultados de la evaluación`}
                </h2>
                <h4 className='text-info mb-3'>
                    {`Puntaje`}
                </h4>
                <p>
                    {`${resultado.calificacion} de ${resultado.respuestas_resultados.length}`}
                </p>
                <h4 className='text-info mt-5 mb-3'>
                    {`Nivel de satisfacción del cliente`}
                </h4>
                <ProgressBar striped variant='dark' now={successPercentage} label={`${successPercentage > 0 ? successPercentage : 0}%`}/>
                <h4 className='text-info mt-5 mb-3'>
                    {`Detalle de la prueba`}
                </h4>
                {renderQuestionAnswer({questions: evaluacion.preguntas, userAnswers: resultado.respuestas_resultados})}
            </Col>
            <Link href={`/courses`}>
                <Button>
                    {`Regresar a cursos`}
                </Button>
            </Link>
        </Row>
    )
}

export default Results
