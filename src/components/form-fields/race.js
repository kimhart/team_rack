import React from "react"

const Race = props => {
  const handleValueChange = e => props.onValueChange(e.target.value)
  const { placeholder, value } = props

  const races = [
    "American Indian or Alaska Native",
    "Asian",
    "Black or African American",
    "Native Hawaiian or Other Pacific Islander",
    "White",
  ]

  return (
    <div className="rack-form__input rack-form__input--select">
      <label htmlFor="race">Race:</label>
      <select
        name="race"
        placeholder={placeholder}
        value={value}
        onChange={handleValueChange}
      >
        {races.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Race
