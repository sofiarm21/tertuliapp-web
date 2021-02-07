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
