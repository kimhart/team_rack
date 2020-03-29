import React from "react"

const Ethnicity = props => {
  const handleValueChange = e => props.onValueChange(e.target.value)
  const { placeholder, value } = props

  const ethnicities = [
    "Hispanic or Latino",
    "Not Hispanic or Latino"
  ]

  return (
    <div className="rack-form__input rack-form__input--select">
      <label htmlFor="incident-location">Ethnicity:</label>
      <select
        name="ethnicity"
        placeholder={placeholder}
        value={value}
        onChange={handleValueChange}
      >
        {ethnicities.map((option, i) => <option key={i} value={option}>{option}</option>)}
      </select>
    </div>
  )
}

export default Ethnicity
