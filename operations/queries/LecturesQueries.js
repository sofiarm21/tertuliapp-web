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
                nombre
                contenido
                orden
                cover {
                    id
                    url
                }
            }
        }
    }
`

export const GET_LECTURE_TOPICS = gql`
    query($id: ID!) {
      leccione(id: $id){
        id
        temas {
          id
          nombre
          contenido
          orden
        }
      }
    }
`
