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
