import { gql } from 'apollo-boost'

export const GET_RESULTS_WITH_DATA = gql`
    query($id: ID!) {
        resultado(id: $id) {
            id
            calificacion
            respuestas_resultados {
                id
                respuesta {
                    id
                    mensaje
                    pregunta {
                        id
                        pregunta
                    }
                }
            }
        }
    }
`
