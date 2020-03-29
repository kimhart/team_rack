import React from "react"

const IncidentLocation = props => {
  const handleValueChange = e => props.onValueChange(e.target.value);
  const { placeholder, value } = props;

  return (
    <select
      className="rack-form--select-input"
      placeholder={placeholder}
      value={value}
      onChange={handleValueChange}
    >
      <option value="lobby">Lobby or common area</option>
      <option value="room">In/near a guest's room</option>
      <option value="outdoors">Parking lot/ outdoors</option>
      <option value="other">Other</option>
    </select>
  )
}

export default IncidentLocation;

