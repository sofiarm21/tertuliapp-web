import Head from 'next/head'
import { Button, Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'

import LectureOverview from '../../../../components/LectureOverview'
import { GET_LECTURE_INFO } from '../../../../operations/queries/LecturesQueries'


function Lecture() {
    
    const router = useRouter()
    const lectureId = router.query.lectureId

    const {
        loading: loadingLecture,
        error: errorLecture,
        data: dataLecture
    } = useQuery(GET_LECTURE_INFO, {
        variables: {
            id: lectureId
        }
    })

    const renderTopics = ({topics}) => {
        return topics.map((t,i) => {
            return (
                <Row className='my-5'>
                    <Col xs={12} className='my-4'>
                        <h2>
                            {t.nombre}
                        </h2>
                    </Col>
                <Col xs={{ span:6, order: i%2 }}>
                    {t.contenido}
                </Col>
                <Col xs={{span:6, order: !i%2 }}>
                    <img
                        src={`http://localhost:1337${t.cover[0].url}`}
                        fluid
                        className='mb-4'
                        style={{height: '500px', width:'100%'}}
                    />
                </Col>
                </Row>
            )
        })
    }

    if (errorLecture) return `Error ${errorLecture}`
    if (loadingLecture) return 'Loading...'

    const {leccione: leccion} = dataLecture

    return (
        <Row className='justify-content-center my-5'>
            <Col xs={12}>
                <LectureOverview lectureInfo={leccion}/>
                <hr/>
                {renderTopics({topics: leccion.temas})}
            </Col>
            <Col xs={'auto'}>
                <Button variant='dark'>
                    {`Realizar evaluación`}
                </Button>
            </Col>
        </Row>
    )
}

export default Lecture
