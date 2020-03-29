import React from "react"
import "../styles/main.less"
import ReportType from "../components/report-type"
import TextInput from "../components/text-input"
import IncidentLocation from "../components/incident-location"
// import moment from "moment";

export default class Form extends React.Component {

  state = {
    formInProgress: false,
    reportType: "criminal",
    location: "lobby"
  }

  startReport = () => this.setState({ formInProgress: true });
  handleReportType = (reportType) => this.setState({ reportType });
  handleDate = (date) => this.setState({ date });
  handleTime = (time) => this.setState({ time });

  render() {
    const { reportType, date, time, location, roomNumber, guestName } = this.state;
    return (
      <div className="rack-app rack-form">
        <div className={`rack-app--form__intro`}>
          <h1>Submit a Report</h1>
          <h3>This will only take 1-2 minutes.</h3>
        </div>
        <form>
          <section className="rack-app--form__report-type">
            <h4>I'd like to report details about:</h4>
            <ReportType
              selected={reportType}
              handleReportType={this.handleReportType}
            />
          </section>
          <section className="rack-app--form__time-location">
            <TextInput
              onValueChange={this.handleDate}
              value={date}
              placeholder="Date of incident"
            />
            <TextInput
              onValueChange={this.handleTime}
              value={time}
              placeholder="Time of incident"
            />
            <IncidentLocation
              onValueChange={this.handleLocation}
              value={location}
            />
            {location === "room" && (
              <div>
                <TextInput
                  onValueChange={this.handleRoomNumber}
                  value={roomNumber}
                  placeholder="Enter room #"
                />
                <TextInput
                  onValueChange={this.handleGuestName}
                  value={guestName}
                  label="Name registered to room (optional)"
                  placeholder="First & Last Name"
                />
              </div>
            )}
          </section>
          <div className="rack-app__button rack-app__button--primary">Next</div>
        </form>
      </div>
    )
  }

}