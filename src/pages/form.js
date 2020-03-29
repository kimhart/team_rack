import React from "react"
import "../styles/main.less"
import ReportType from "../components/form-fields/report-type"
import TextInput from "../components/form-fields/text-input"
import TextArea from "../components/form-fields/text-area"
import Location from "../components/form-fields/location"
import Gender from "../components/form-fields/gender"
// import moment from "moment";
import Chevron from "../components/chevron";
import Logo from "../components/logo";
import Hide from "../components/hide";
import Age from "../components/form-fields/age";
import Ethnicity from "../components/form-fields/ethnicity"
import Race from "../components/form-fields/race"
import HairColor from "../components/form-fields/hair-color"
import Image from "../components/image";

export default class Form extends React.Component {

  state = {
    formInProgress: false,
    formPosition: 0,
    reportType: "criminal",
    location: "lobby"
  }

  startReport = () => this.setState({ formInProgress: true });
  handleReportType = (reportType) => this.setState({ reportType });

  handleLocation = (location) => {
    const { customLocation } = this.state;
    this.setState({ location: customLocation || location });
  }

  handleAge = (age) => this.setState({ age });

  handleDate = (date) => this.setState({ date });

  handleTime = (time) => this.setState({ time });

  handleGender = (gender) => this.setState({ gender });

  handleEthnicity = (ethnicity) => this.setState({ ethnicity });

  handleRace = (race) => this.setState({ race });

  handleHairColor = (hairColor) => this.setState({ hairColor });

  handleStandoutFeatures = (standoutFeatures) => this.setState({ standoutFeatures });

  advanceForm = () => {
    const { formPosition } = this.state;
    if (formPosition < 3) {
      this.setState({ formPosition: formPosition + 1})
    }
  }

  hideForm = () => this.setState({ formHidden: true });

  showForm = () => this.setState({ formHidden: false });

  handleBreadcrumb = (index) => this.setState({ formPosition: index});

  render() {
    const { reportType, date, time, location, roomNumber, guestName, customLocation, formPosition, formHidden, gender, age, race, ethnicity, hairColor, standoutFeatures } = this.state;
    const humanDescription = reportType === "criminal" || reportType === "victim";
    const vehicleDescription = reportType === "vehicle";
    return (
      <div className="rack-app rack-form">
        <header>
          <Logo />
          <div onClick={this.hideForm}>
            <Hide />
          </div>
        </header>
        {formHidden && (
          <div onClick={this.showForm} className="rack-form__hide">
            <Image />
          </div>
        )}
        {formPosition === 0 && (
          <div className={`rack-form__intro`}>
            <h1>Submit a Report</h1>
            <h2>This will only take 1-2 minutes.</h2>
            <div
              onClick={this.advanceForm}
              className="rack-app__button rack-app__button--dark"
            >
              Let's Go
              <Chevron />
            </div>
          </div>
        )}
        <form>
          {formPosition > 0 && (
            <div className="rack-form__breadcrumbs">
              <div
                className={`crumb ${formPosition === 1 ? "-active" : ""}`}
                onClick={() => this.handleBreadcrumb(1)}
              />
              <div
                className={`crumb ${formPosition === 2 ? "-active" : ""}`}
                onClick={() => this.handleBreadcrumb(2)}
              />
              <div
                className={`crumb ${formPosition === 3 ? "-active" : ""}`}
                onClick={() => this.handleBreadcrumb(3)}
              />
            </div>
          )}
          {formPosition === 1 && (
            <section className="rack-form__section rack-form__report-type">
              <h3>This is regarding:</h3>
              <ReportType
                // label="This report includes details about:"
                selected={reportType}
                handleReportType={this.handleReportType}
              />
            </section>
          )}
          {formPosition === 2 && (
            <section className="rack-form__section rack-form__time-location">
              <h3>When & Where</h3>
              <TextInput
                onValueChange={this.handleDate}
                value={date}
                label={
                  reportType === "room"
                    ? "Date of suspicious activity:"
                    : "Date last seen:"
                }
                placeholder="Enter date"
              />
              <TextInput
                onValueChange={this.handleTime}
                value={time}
                label="Approximate time noticed:"
                placeholder="Enter time"
              />
              {reportType !== "room" && (
                <Location
                  onValueChange={this.handleLocation}
                  value={location}
                  reportType={reportType}
                />
              )}
              {(location === "room" || reportType === "room") && (
                <div>
                  <TextInput
                    onValueChange={this.handleRoomNumber}
                    value={roomNumber}
                    label="Room number:"
                    placeholder="Enter room #"
                  />
                  <TextInput
                    onValueChange={this.handleGuestName}
                    value={guestName}
                    label="Name registered to room (optional):"
                    placeholder="Enter first & last name"
                  />
                </div>
              )}
              {location === "other" && (
                <TextInput
                  onValueChange={this.handleCustomLocation}
                  value={customLocation}
                  label="Please specify the incident's location:"
                  placeholder="Pool, restaurant, gym, etc..."
                />
              )}
            </section>
          )}
          {formPosition === 3 && (
            <section className="rack-form__section rack-form__person-description">
              <h3>{reportType} Description</h3>
              {reportType === "room" && (
                <TextArea
                  label="What's happening?"
                  onValueChange={this.handleSuspiciousRoomBehavior}
                  tall
                  placeholder="Several unregistered visitors in & out, sounds of distress, suspicious conversation, etc..."
                />
              )}
              {humanDescription && (
                <>
                  <Gender
                    onValueChange={this.handleGender}
                    selected={gender}
                    horizontal
                    label="Gender"
                  />
                  <Age
                    onValueChange={this.handleAge}
                    label="Age Range"
                    selected={age}
                    reportType={reportType}
                  />
                  <Race
                    onValueChange={this.handleRace}
                    label="Race"
                    selected={race}
                  />
                  <Ethnicity
                    onValueChange={this.handleEthnicity}
                    label="Ethnicity"
                    selected={ethnicity}
                  />
                  <HairColor
                    onValueChange={this.handleHairColor}
                    label="Hair Color"
                    selected={hairColor}
                  />
                  <TextArea
                    onValueChange={this.handleStandoutFeatures}
                    value={standoutFeatures}
                    label="Any standout features?"
                    placeholder="Tattoos, piercings, glasses, speech characteristics, jewelry, clothing, etc..."
                  />
                </>
              )}
              {vehicleDescription && <>car stuff</>}
            </section>
          )}
          {formPosition > 0 && (
            <div
              onClick={this.advanceForm}
              className="rack-app__button rack-app__button--primary"
            >
              Next
            </div>
          )}
        </form>
      </div>
    )
  }

}