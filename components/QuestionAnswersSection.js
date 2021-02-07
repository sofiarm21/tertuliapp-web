import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const QuestionAnswersSection = (props) => {

    const {
        question,
        answers
    } = props

    const []

    console.log('QuestionAnswersSection');
    const renderAnswers = (props) => {

        const {
            answers
        } = props



        return answers.map(a => {
            console.log(a);
            return (
                <Row className='mt-2'>
                    <Col xs={{ span: 4, offset: 8 }}>
                        <Card body>
                            {`${a.mensaje}`}
                        </Card>
                    </Col>
                </Row>
            )
        })
    }

    console.log('question');
    console.log(question);
    console.log('answers');
    console.log(answers);

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
        </Row>
    )
}

export default QuestionAnswersSection
