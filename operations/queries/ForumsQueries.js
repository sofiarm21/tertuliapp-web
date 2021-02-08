import {gql} from 'apollo-boost'

export const GET_FORUM_ENTRIES = gql`
    query($id: ID!) {
        foro(id: $id) {
        entradas {
            id
            usuario {
            id
            username
            }
            contenido
            created_at
            responde {
            id
            }
            respuesta {
            id
            usuario {
                id
                username
            }
            contenido
            created_at
            }
        }
        }
    }
`

export const GET_FORUMS_DETAILS = gql`
    query {
        foros {
            id
            Titulo
            Descripcion
        }
        entradasConnection {
            groupBy {
            foro {
                key
                connection {
                aggregate {
                    count
                }
                }
            }
            }
        }
    }
`