import { gql } from 'apollo-boost'

export const GET_COURSES_INFO = gql`
    {
        courses {
            id
            name
            description
            image {
                url
            }
        }
    }
`
export const GET_COURSE_LECTURES = gql`
    query($id: ID!) {
        course(id: $id) {
            id
            name
            description
            image {
                url
            }
            lecciones {
                id
                nombre
                descripcion
                orden
            }
        }
    }
`
export const GET_COURSE_EVALUATIONS = gql`
    query($id: ID!) {
        course(id: $id) {
            id
            evaluaciones {
              	id
              	titulo
             	descripcion
              	preguntas {
            		id
            		pregunta
            		respuestas {
              		    id
              		    mensaje
              	        valoracion
           			}
              	}
                resultados {
                    calificacion
                    created_at
                }
            }
        }
    }
`
