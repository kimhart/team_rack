import React from "react"

const IncidentLocation = props => {
  const handleValueChange = e => props.onValueChange(e.target.value);
  const { placeholder, value } = props;

  return (
    <div className="rack-form__input rack-form__input--select">
      <label htmlFor="incident-location">Location of incident:</label>
      <select
        name="incident-location"
        placeholder={placeholder}
        value={value}
        onChange={handleValueChange}
      >
        <option value="lobby">Lobby or common area</option>
        <option value="room">In/near a guest's room</option>
        <option value="outdoors">Parking lot/ outdoors</option>
        <option value="other">Other</option>
      </select>
    </div>
  )
}

export default IncidentLocation;
