import { gql } from 'apollo-boost'

export const GET_EVALUATION_DATA = gql`
    query($id: ID!) {
        evaluacion(id: $id){
            id
            preguntas {
                id
                pregunta
                respuestas {
                    id
                    mensaje
                    valoracion
                }
            }
        }
    }
`

export const GET_ALL_EVALUATIONS = gql`
    query {
        evaluacions {
            id
            titulo
            preguntas {
                id
                pregunta
                respuestas {
                    id
                    mensaje
                    valoracion
                }
            }
        }
    }
`

export const GET_USER_PROGRESS = gql`
    query {
        evaluacions {
        	id
            titulo
        	course {
          	    id
          	    name
                description
                image {
                    url
                }
        	}
            resultados {
                id
                calificacion
                created_at
                respuestas_resultados {
                    id
                    respuesta {
                        id
                        mensaje
                    }
                }
            }
      	}
    }
`
