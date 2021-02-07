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
