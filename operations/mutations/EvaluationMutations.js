import { gql } from 'apollo-boost'

export const ADD_RESULTADO = gql`
    mutation($calificacion: Int!, $evaluacion_id: ID!) {
        createResultado(input: {
            data: {
              calificacion: $calificacion,
              evaluacion_id: $evaluacion_id
            }
        })
        {
            resultado {
                id
            }
        }
    }
`

export const ADD_RESPUESTA_RESULTADO = gql`
    mutation($respuesta_id: ID!, $resultado_id: ID!) {
        createRespuestasResultado(input: {
            data: {
              respuesta: $respuesta_id,
              resultado: $resultado_id
            }
        })
        {
            respuestasResultado {
                id
            }
        }
    }
`
