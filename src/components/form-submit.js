import React from "react"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"

const FormSubmit = data => {
  console.log(data)

  const SUBMIT_FORM = gql`
    mutation SubmitForm($report: SuspiciousActivityReport) {
      addSuspiciousActivityReport(report: $report) {
        id
        suspicion_type
        date_observed
        room_number
      }
    }
  `
  const SubmitForm = useMutation(SUBMIT_FORM)
  console.log(SubmitForm({ date_observed: "2020-03-28" }))
}

export default FormSubmit
