import React from "react"

const ReportType = (props) => {

  const handleReportType = (e) => props.handleReportType(e.target.value);

  return (
    <div className="rack-form--radio-group">
      <label>
        <input
          type="radio"
          value="criminal"
          checked={props.selected === "criminal"}
          onChange={handleReportType}
        />
        A criminal or suspicious person
      </label>
      <label>
        <input
          type="radio"
          value="victim"
          checked={props.selected === "victim"}
          onChange={handleReportType}
        />
        A victim in need of help
      </label>
      <label>
        <input
          type="radio"
          value="room-traffic"
          checked={props.selected === "room-traffic"}
          onChange={handleReportType}
        />
        A suspicious amount of visitors to a room
      </label>
      <label>
        <input
          type="radio"
          value="vehicle"
          checked={props.selected === "vehicle"}
          onChange={handleReportType}
        />
        A suspicious vehicle
      </label>
    </div>
  )
}

export default ReportType;
