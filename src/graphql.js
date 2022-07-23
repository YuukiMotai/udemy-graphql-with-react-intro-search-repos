import gql from 'graphql-tag'

export const me = gql`
query me {
    user(login: "iteachonudemy"){
      name
      avatarUrl
    }
  }
`
