import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Row, Toast } from 'react-bootstrap'

const QuestionAnswersSection = (props) => {

    const {
        question,
        answers,
        changeEvaluationRecord
    } = props

    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [loadingNextAnswer, setLoadingNextAnswer] = useState(false)

    useEffect(() => {
        if (selectedAnswer) {
            setLoadingNextAnswer(true)
        }
    }, [selectedAnswer])

    const selectAnswer = ({answer}) => {
        setLoadingNextAnswer(true)
        if (!selectedAnswer){
            setSelectedAnswer(answer)
        }
        if (!selectedAnswer) {
            setTimeout(() => {
                changeEvaluationRecord({answer: answer})
                setLoadingNextAnswer(false)
            }, 2000)
        }
    }

    const selecteAnswerColor = ({answerValue}) => {
        if (answerValue < 0) return 'danger'
        else if (answerValue > 0) return 'success'
        else return 'warning'
    }


    const renderAnswers = (props) => {

        const {
            answers
        } = props

        return answers.map(a => {
            return (
                <Row className='mt-2'>
                    <Col xs={{ span: 6, offset: 6 }}>
                        <Button
                            body
                            variant={
                                `${
                                    selectedAnswer
                                    ? selectedAnswer.id == a.id
                                        ? selecteAnswerColor({answerValue: a.valoracion})
                                        : 'info'
                                    : 'info'}`
                                }
                            text='light'
                            onClick={() => selectAnswer({answer: a})}
                        >
                            {`${a.mensaje}`}
                        </Button>
                    </Col>
                </Row>
            )
        })
    }


    return (
        <Row className='QuestionAnswersSection my-5'>
            <Col xs={4}>
                <Toast>
                    <Toast.Header>
                        <strong className="mr-auto">
                            {`Roger`}
                        </strong>
                        <small>> 1 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>
                        {`${question.pregunta}`}
                    </Toast.Body>
                </Toast>
            </Col>
            <Col xs={12}>
                {renderAnswers({
                    answers: answers
                })}
            </Col>
            <Col xs={12}>
                {
                    loadingNextAnswer &&
                    <h4>
                        {`Escribiendo...`}
                    </h4>
                }
            </Col>
        </Row>
    )
}

export default QuestionAnswersSection
