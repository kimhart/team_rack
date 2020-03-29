import React from "react"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"

const FormSubmit = data => {
  console.log(data)

  const SUBMIT_FORM = gql`
    mutation {
      addSuspiciousActivityReport(
        report: {
          suspicion_type: "victim"
          room_number: "10"
          date_observed: "2020-03-29"
        }
      ) {
        id
        suspicion_type
        date_observed
        room_number
      }
    }
  `
  const submit = useMutation(SUBMIT_FORM);
  console.log(submit())

}

export default FormSubmit
