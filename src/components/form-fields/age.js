import React from "react"

const Age = props => {
  const handleValueChange = e => props.onValueChange(e.target.value)
  const { placeholder, value, reportType } = props
  
  const getRanges = () => {
    let ranges;
    if (reportType === "criminal") {
      ranges = [
        { value: "under-18", label: "Under 18 yrs" },
        { value: "18-24", label: "18-24 yrs" },
        { value: "25-34", label: "25-34 yrs" },
        { value: "35-44", label: "35-44 yrs" },
        { value: "45-60", label: "45-60 yrs" },
        { value: "60+", label: "60+ yrs" },
      ]
    } else {
      ranges = [
        { value: "child", label: "Child (Less than 10 yrs)" },
        { value: "preteen", label: "Pre-teen (10-12 yrs)" },
        { value: "teenager", label: "Teenager (13-17 yrs)" },
        { value: "adult", label: "Adult (18+ yrs)" }
      ]
    }

    return ranges.map((option, i) => <option key={i} value={option.value}>{option.label}</option>);
  }

  return (
    <div className="rack-form__input rack-form__input--select">
      <label htmlFor="incident-location">Age Range:</label>
      <select
        name="age"
        placeholder={placeholder}
        value={value}
        onChange={handleValueChange}
      > 
      {getRanges()}
      </select>
    </div>
  )
}

export default Age
