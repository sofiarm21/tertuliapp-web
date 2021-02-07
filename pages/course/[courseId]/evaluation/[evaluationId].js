import { useState, useEffect } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/react-hooks'

import QuestionAnswersSection from '../../../../components/QuestionAnswersSection'
import { GET_EVALUATION_DATA } from '../../../../operations/queries/EvaluationQueries'
import { ADD_RESULTADO } from '../../../../operations/mutations/EvaluationMutations'


function Evaluation() {

    const router = useRouter()
    const evaluationId = router.query.evaluationId
    const questionsRender = []
    const [evaluationRecord, setEvaluationRecord] = useState(null)
    const [questions, setQuestions] = useState(null)
    const [questionsToRender, setQuestionsToRender] = useState([])
    const [endEvaluation, setEndEvaluation] = useState(false)

    const [addResultado, { data: dataResultado, loading: loadingResultado, error: errorResultado }] = useMutation(ADD_RESULTADO, {

    });


    const changeEvaluationRecord = ({answer}) => {
        if (evaluationRecord){
            setEvaluationRecord(evaluationRecord + answer.valoracion)
        }else {
            setEvaluationRecord(answer.valoracion)
        }
    }

    useEffect(() => {
        if (questions){
            if (questionsToRender.length >= questions.length ){
                setEndEvaluation(true)
            }
        }
    }, [evaluationRecord, questions])

    useEffect(() => {
        if (endEvaluation) {
            addResultado({
                variables: {
                    evaluacion_id: evaluationId,
                    calificacion: Number(evaluationRecord)
                }
            })
        }
    }, [endEvaluation])

    useEffect(() => {
        if (questionsToRender.length > 0 && evaluationRecord != null){
            renderNextQuestion({questions: questions})
        }
    }, [questionsToRender, evaluationRecord, questions])


    const renderNextQuestion = ({questions}) => {
        if (questionsToRender.length  < questions.length){
            setQuestionsToRender(questionsToRender.concat(
                <QuestionAnswersSection
                    question={questions[questionsToRender.length - 1]}
                    answers={questions[questionsToRender.length - 1].respuestas}
                    changeEvaluationRecord={changeEvaluationRecord}
                />
            ))
        }
    }


    const {
        loading: loadingEvaluation,
        error: errorEvaluation,
        data: dataEvaluation
    } = useQuery(GET_EVALUATION_DATA, {
        variables: {
            id: evaluationId
        }
    })

    const renderQuestionWithAnwers = (props) => {
        const {
            questions
        } = props

        if (!questionsToRender.length) {
            console.log('questionsToRender');
            console.log(questionsToRender);
            const newQuestionsToRender = []
            newQuestionsToRender.push(
                <QuestionAnswersSection
                    question={questions[0]}
                    answers={questions[0].respuestas}
                    changeEvaluationRecord={changeEvaluationRecord}
                />
            )
            setQuestionsToRender(newQuestionsToRender)
        }
    }



    if (errorEvaluation) return `Error ${errorEvaluation}`
    if (loadingEvaluation) return 'Loading...'


    const { evaluacion } = dataEvaluation
    const { preguntas } = evaluacion

    if (!questions){
        setQuestions(preguntas)
    }

    console.log('dataResultado');
    console.log(dataResultado);

    return (
        <Row className='Evaluation my-5'>
            <Col xs={12}>
                <h3>
                    {`Realizar evaluación ${evaluationId}`}
                </h3>
                { questionsToRender.length == 0  &&
                    renderQuestionWithAnwers({
                        questions: preguntas
                    })
                }
                {questionsToRender}
                {endEvaluation  &&
                    <>
                        <h5>
                            {'Ha terminado la conversación'}
                        </h5>
                        
                        <Button
                        >
                            {`Ver resultados`}
                        </Button>
                        {`${loadingResultado}`}
                        {`${dataResultado}`}
                    </>
                }
            </Col>
        </Row>
    )
}

export default Evaluation
