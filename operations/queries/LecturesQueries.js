import { gql } from 'apollo-boost'

export const GET_LECTURE_INFO = gql`
    query($id: ID!) {
        leccione(id: $id) {
            nombre
            descripcion
            orden
            cover {
                url
            }
            temas {
                id
                orden
                nombre
                contenido
                cover {
                    url
                }
            }
        }
    }
`
