import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { Button, Card, Col, Row, ProgressBar, Image } from 'react-bootstrap'
import { differenceBy } from 'lodash'
import moment from 'moment'


import { GET_USER_PROGRESS } from '../../operations/queries/EvaluationQueries'
import { GET_COURSES_INFO } from '../../operations/queries/CoursesQueries'
import CourseTile from '../../components/CourseTile'



function Progress() {

    const router = useRouter()
    const userId = router.query.userId

    const {
        loading: loadingCourse,
        error: errorCourse,
        data: dataCourse
    } = useQuery(GET_USER_PROGRESS)

    const { loading: loadingCourses, error: errorCourses, data: dataCourses } = useQuery(GET_COURSES_INFO)


    const renderCourses = ({courses}) => {
        return courses.map(c => {
            return (
                <Row>
                    <Col xs={4}>
                        <CourseTile course={c}/>
                    </Col>
                </Row>
            )
        })
    }

    const renderEvaluacionesRealizadadas = ({evaluaciones}) => {
        return evaluaciones.map(e => {

            var successPercentage = 0
            var totalQuestions = 0

            e.resultados.map((r,i) => {
                if (r.respuestas_resultados.length){
                    successPercentage = successPercentage + ((r.calificacion * 100) / r.respuestas_resultados.length) / 2 + 50
                }
            })
            successPercentage = Math.trunc(successPercentage / e.resultados.length)

            return (
                <Row>
                    <Col xs={4}>
                        <Card   border='primary'>
                            <Card.Body>
                                <h5>
                                    {`${e.course.name}`}
                                </h5>
                                <p>
                                    {`${e.titulo}`}
                                </p>
                                <h6>
                                    {`Desempeño en el curso`}
                                </h6>
                                <ProgressBar striped variant='dark' now={successPercentage} label={`${successPercentage > 0 ? successPercentage : 0}%`}/>
                                <h6 className='mt-3'>
                                    {`Última vez realizada`}
                                </h6>
                                {`${moment(e.resultados[e.resultados.length - 1].created_at)}`}

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )



        })
    }

    if (loadingCourse || loadingCourses) return 'Loading...'
    if (errorCourse || errorCourses) return 'Error'

    const { courses: allCourses } = dataCourses

    const courses = []
    dataCourse.evaluacions.map(e => {
        courses.push(e.course)
    })

    const systemProgress = (courses.length * 100) / allCourses.length
    const pendingCourses = differenceBy(allCourses, courses, 'id')

    return (
        <Row>
            <Col xs={12}>
                <Card className='my-4 px-3 pb-5'>
                    <Card.Body>
                        <h3 className='text-primary mb-3'>
                            {`Usuario`}
                        </h3>
                        <Row>
                            <Col xs={1}>
                                <Image src='../../images/personicon.jpeg' roundedCircle />
                            </Col>
                            <Col xs={11}>
                                <h6>
                                    <strong>
                                        {`GusGus`}
                                    </strong>
                                </h6>
                            </Col>
                         </Row>
                        <h3 className='text-primary mt-5 mb-3'>
                            {`Progreso en el sistema`}
                        </h3>
                        <ProgressBar striped variant='dark' now={systemProgress} label={`${systemProgress > 0 ? systemProgress : 0}%`}/>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <h3 className='text-primary mb-3'>
                            {`Evaluaciones realizadas`}
                        </h3>
                        {renderEvaluacionesRealizadadas({evaluaciones: dataCourse.evaluacions})}
                    </Card.Body>
                </Card>
                <h3 className='text-primary mt-5 mb-3'>
                    {`Cursos realizados`}
                </h3>
                {renderCourses({courses: courses})}
                <h3 className='text-primary mt-5 mb-3'>
                    {`Cursos pendientes por realizar`}
                </h3>
                {renderCourses({courses: pendingCourses})}
            </Col>
        </Row>
    )
}

export default Progress
