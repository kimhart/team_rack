import React from "react"
import { graphql } from "gatsby"
// import { useQuery } from "@apollo/react-hooks"
// import gql from "graphql-tag"
import "../styles/main.less"

export const AllVictimsQuery = graphql`
  {
    rackAPI {
      victims {
        name
      }
    }
  }
`

// This query is executed at run time by Apollo.
// const APOLLO_QUERY = gql`
//   {
//     meme(where: { id: "cjke2xlf9nhd90953khilyzja" }) {
//       photo {
//         url(
//           transformation: {
//             image: { resize: { width: 600, height: 600, fit: crop } }
//           }
//         )
//       }
//     }
//   }
// `


export default ({
  data: {
    rackAPI: { victims },
  },
}) => {
  // const { loading, error, data } = useQuery(APOLLO_QUERY)
  return (
    <div className="rack-app">
    <h1>Victims</h1>
    {victims.map((victim, i) => <h3 key={i}>{victim.name}</h3>)}
    </div>
  )
}
