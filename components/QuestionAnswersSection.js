import React, { useState, useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

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
    //
    // useEffect(() => {
    //     if (!loadingNextAnswer) {
    //         if (selectedAnswer) {
    //             changeEvaluationRecord({answer: selectedAnswer})
    //         }
    //     }
    // }, [loadingNextAnswer])

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
                    <Col xs={{ span: 4, offset: 8 }}>
                        <Card
                            body
                            bg={
                                `${
                                    selectedAnswer
                                    ? selectedAnswer.id == a.id
                                        ? selecteAnswerColor({answerValue: a.valoracion})
                                        : 'dark'
                                    : 'dark'}`
                                }
                            text='light'
                            onClick={() => selectAnswer({answer: a})}
                        >
                            {`${a.mensaje}`}
                        </Card>
                    </Col>
                </Row>
            )
        })
    }


    return (
        <Row className='QuestionAnswersSection my-5'>
            <Col xs={4}>
                <Card body>
                    {`${question.pregunta}`}
                </Card>
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
