import React from "react"
import { graphql } from "gatsby"
// import { useQuery } from "@apollo/react-hooks"
// import gql from "graphql-tag"
import "../styles/main.less"

export const rackAPI = graphql`
  {
    rackAPI {
      victims {
        name
      }
    }
  }
`

// This query is executed at run time by Apollo.
// const GET_REPORTS = gql`
//   {
//     suspiciousActivityReport {
//       id
//       suspicion_type
//       date_observed
//       room_number
//     }
//   }
// `

export default ({
  data: {
    rackAPI: { victims },
  },
}) => {
  // const { data } = useQuery(GET_REPORTS);
  return (
    <div className="rack-app">
      <h1>Victims</h1>
      {victims?.map((victim, i) => (
        <h3 key={i}>{victim.name}</h3>
      ))}
      {/* {data?.suspiciousActivityReport?.map((report, i) => (
        <div key={i}>{report.suspicion_type}</div>
      ))} */}
    </div>
  )
}
