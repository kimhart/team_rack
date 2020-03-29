import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"

export default class Form extends React.Component {
  render() {
    const MATCH_QUERY = gql`
      query MatchResults {
        matchResults {
          input_bucket
          input_prefix
          input_filename
          similarity_bucket
          similarity_prefix
          similarity_filename
          similarity_score
        }
      }
    `
    return (
      <Query query={MATCH_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return "Loading..."
          if (error) return `Error! ${error.message}`

          const { matchResults } = data
          return matchResults?.map(match => (
            <div>
              {match.similarity_bucket}:
              <img
                src={`https://${match.input_bucket}.s3.amazonaws.com/${match.input_prefix}/${match.input_filename}`}
              />
              match:
              <img
                src={`https://${match.similarity_bucket}.s3.amazonaws.com/${match.similarity_prefix}/${match.similarity_filename}`}
              />
            </div>
          ))
        }}
      </Query>
    )
  }
}
