import React from "react"

const Location = props => {
  const handleValueChange = e => props.onValueChange(e.target.value);
  const { placeholder, value, reportType } = props;

  const getLocations = () => {
    let locations
    if (reportType === "vehicle") {
      locations = [
        { value: "parked", label: "Parked in parking lot" },
        { value: "moving", label: "Driving to/from the hotel frequently" },
        { value: "nearby", label: "Loitering/circling near the property" },
      ]
    } else {
      locations = [
        { value: "lobby", label: "Lobby / front desk" },
        { value: "room", label: "In or near a guest's room" },
        { value: "outdoors", label: "Parking lot / outdoors" },
        { value: "other", label: "Other" }
      ]
    }

    return locations.map((option, i) => (
      <option key={i} value={option.value}>
        {option.label}
      </option>
    ))
  }
  return (
    <div className="rack-form__input rack-form__input--select">
      <label htmlFor="location">Location:</label>
      <select
        name="location"
        placeholder={placeholder}
        value={value}
        onChange={handleValueChange}
      >
        {getLocations()}
      </select>
    </div>
  )
}

export default Location;
