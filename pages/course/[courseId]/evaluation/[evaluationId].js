import { useState, useEffect } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'

import QuestionAnswersSection from '../../../../components/QuestionAnswersSection'
import { GET_EVALUATION_DATA } from '../../../../operations/queries/EvaluationQueries'


function Evaluation() {

    const router = useRouter()
    const evaluationId = router.query.evaluationId
    const questionsRender = []
    const [evaluationRecord, setEvaluationRecord] = useState(null)
    const [questions, setQuestions] = useState(null)
    const [questionsToRender, setQuestionsToRender] = useState([])


    const changeEvaluationRecord = ({answer}) => {
        console.log('changeEvaluationRecord');
        if (evaluationRecord){
            setEvaluationRecord(evaluationRecord + answer.valoracion)
        }else {
            setEvaluationRecord(answer.valoracion)
        }


    }

    // useEffect(() => {
    //     console.log('evaluationRecord');
    //     console.log(evaluationRecord);
    //     console.log('questionsRender.length');
    //     console.log(questionsToRender.length);
    //     if (questionsToRender.length > 0){
    //         renderNextQuestion({questions: questions})
    //     }
    // }, [evaluationRecord])

    useEffect(() => {
        console.log('questionsToRender');
        console.log(questionsToRender);
        console.log(questionsToRender.length);
        console.log('questionsToRender');
        console.log(questionsToRender);
        console.log(questionsToRender.length);
        if (questionsToRender.length > 0 && evaluationRecord != null){
            console.log('renderNextQuestion');
            renderNextQuestion({questions: questions})
        }
    }, [questionsToRender, evaluationRecord])




    const renderNextQuestion = ({questions}) => {
        console.log('questions');
        console.log(questions);
        console.log('questionsToRender');
        console.log(questionsToRender);
        console.log('questions[questionsToRender.length]');
        console.log(questions[questionsToRender.length - 1]);
        console.log(questions[questionsToRender.length - 1].respuestas);
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
            </Col>
        </Row>
    )
}

export default Evaluation
