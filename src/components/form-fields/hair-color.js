import React from "react"

const HairColor = props => {
  const handleValueChange = e => props.onValueChange(e.target.value)
  const { placeholder, value } = props

  const colors = [
    "Blonde",
    "Brown",
    "Dark Brown / Black",
    "Red",
    "Gray",
    "Other"
  ]

  return (
    <div className="rack-form__input rack-form__input--select">
      <label htmlFor="hair-color">Hair color:</label>
      <select
        name="hair-color"
        placeholder={placeholder}
        value={value}
        onChange={handleValueChange}
      >
        {colors.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default HairColor
