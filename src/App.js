import React, {Component} from 'react'
import {ApolloProvider} from 'react-apollo'
import { Query } from 'react-apollo'
import client from './client'
import { me } from './graphql'


class App extends Component {
    render(){
      return (
          <ApolloProvider client={client}>
            <div>Hello GraphQL.</div>
            <Query query={me}>
            {
              ({loading, error, data}) => {
                if (loading) return 'Loading...'
                if (error) return `error ${error.message}`

                return <div>{data.user.name}</div>
              }
            }
          </Query>
          </ApolloProvider>
    )
  }
}

export default App;
