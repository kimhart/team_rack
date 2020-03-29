import React from "react"

const ReportType = (props) => {
  const {selected, label} = props;
  const handleReportType = (e) => props.handleReportType(e.target.value);

  return (
    <div className="rack-form__input rack-form__input--radio-group">
      <p>{label}</p>
      <label>
        <input
          type="radio"
          name="criminal"
          value="criminal"
          checked={selected === "criminal"}
          onChange={handleReportType}
        />
        A criminal or suspicious person
      </label>
      <label>
        <input
          type="radio"
          value="victim"
          checked={selected === "victim"}
          onChange={handleReportType}
        />
        A victim in need of help
      </label>
      <label>
        <input
          type="radio"
          value="room-traffic"
          checked={selected === "room-traffic"}
          onChange={handleReportType}
        />
        A suspicious amount of visitors to a room
      </label>
      <label>
        <input
          type="radio"
          value="vehicle"
          checked={selected === "vehicle"}
          onChange={handleReportType}
        />
        A suspicious vehicle
      </label>
    </div>
  )
}

export default ReportType;
