import React from "react"
import "../styles/main.less"
import ReportType from "../components/form-fields/report-type"
import TextInput from "../components/form-fields/text-input"
import TextArea from "../components/form-fields/text-area"
import Location from "../components/form-fields/location"
import Gender from "../components/form-fields/gender"
import Chevron from "../components/chevron"
import Logo from "../components/logo"
import Hide from "../components/hide"
import Age from "../components/form-fields/age"
import Ethnicity from "../components/form-fields/ethnicity"
import Race from "../components/form-fields/race"
import HairColor from "../components/form-fields/hair-color"
import Image from "../components/image"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"

export default class Form extends React.Component {
  state = {
    formInProgress: false,
    formPosition: 0,
    reportType: "criminal",
    location: "lobby",
    ethnicity: "American Indian or Alaska Native",
    race: "Hispanic or Latino",
    hair_color: "blonde",
  }

  startReport = () => this.setState({ formInProgress: true })
  handleReportType = reportType => this.setState({ reportType })

  handleLocation = location => {
    const { customLocation } = this.state
    this.setState({ location: customLocation || location })
  }

  handleAge = age => this.setState({ age })

  handleDate = date => this.setState({ date })

  handleTime = time => this.setState({ time })

  handleGender = gender => this.setState({ gender })

  handleEthnicity = ethnicity => this.setState({ ethnicity })

  handleRace = race => this.setState({ race })

  handleHairColor = hairColor => this.setState({ hairColor })

  handleStandoutFeatures = standoutFeatures =>
    this.setState({ standoutFeatures })

  advanceForm = () => {
    const { formPosition } = this.state
    if (formPosition < 3) {
      this.setState({ formPosition: formPosition + 1 })
    }
  }

  hideForm = () => this.setState({ formHidden: true })

  showForm = () => this.setState({ formHidden: false })

  handleBreadcrumb = index => this.setState({ formPosition: index })

  handleLicenseNumber = licenseNumber => this.setState({ licenseNumber })

  handleLicenseState = licenseState => this.setState({ licenseState })

  onFileChangeHandler = event => {
    this.setState({ upload: event.target.files[0] })
  }

  render() {
    const {
      reportType,
      date,
      time,
      location,
      roomNumber,
      guestName,
      customLocation,
      formPosition,
      formHidden,
      gender,
      age,
      race,
      ethnicity,
      hairColor,
      standoutFeatures,
      licenseNumber,
      licenseState,
    } = this.state
    const humanDescription =
      reportType === "criminal" || reportType === "victim"
    const vehicleDescription = reportType === "vehicle"

    const FILE_UPLOAD = gql`
      mutation FileUpload($file: Upload!, $sarId: ID!) {
        uploadFile(file: $file, sarId: $sarId) {
          url
        }
      }
    `
    const SUBMIT_FORM = gql`
      mutation SubmitForm($report: SuspiciousActivityReportInput!) {
        addSuspiciousActivityReport(report: $report) {
          id
          suspicion_type
          date_observed
          room_number
          date_observed
          time_observed
          location_observed
          room_number
          room_registered_name
          age_observed
          gender
          race
          ethnicity
          hair_color
          noteable_features
          license_state
          license_number
        }
      }
    `
    return (
      <Mutation mutation={FILE_UPLOAD}>
        {uploadFile => (
          <Mutation mutation={SUBMIT_FORM}>
            {submitForm => (
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
                  {formPosition > 0 && formPosition < 4 && (
                    <div className="rack-form__breadcrumbs">
                      <div
                        className={`crumb ${
                          formPosition === 1 ? "-active" : ""
                        }`}
                        onClick={() => this.handleBreadcrumb(1)}
                      />
                      <div
                        className={`crumb ${
                          formPosition === 2 ? "-active" : ""
                        }`}
                        onClick={() => this.handleBreadcrumb(2)}
                      />
                      <div
                        className={`crumb ${
                          formPosition === 3 ? "-active" : ""
                        }`}
                        onClick={() => this.handleBreadcrumb(3)}
                      />
                    </div>
                  )}
                  {formPosition === 1 && (
                    <section className="rack-form__section rack-form__report-type">
                      <h3>Report Type</h3>
                      <ReportType
                        label="This includes details about:"
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
                          <input
                            type="file"
                            name="file"
                            onChange={this.onFileChangeHandler}
                          />
                          <TextArea
                            onValueChange={this.handleStandoutFeatures}
                            value={standoutFeatures}
                            label="Any standout features?"
                            placeholder="Tattoos, piercings, glasses, speech characteristics, jewelry, clothing, etc..."
                          />
                        </>
                      )}
                      {vehicleDescription && (
                        <>
                          <TextInput
                            label="License Plate #"
                            placeholder="Enter number"
                            value={licenseNumber}
                            onValueChange={this.handleLicenseNumber}
                          />
                          <TextInput
                            label="License Plate State"
                            value={licenseState}
                            placeholder="Enter State (CA, NY, etc)"
                            onValueChange={this.handleLicenseState}
                          />
                          <input
                            type="file"
                            name="file"
                            onChange={this.onFileChangeHandler}
                          />
                        </>
                      )}
                    </section>
                  )}
                  {formPosition === 3 && (
                    <div
                      onClick={() =>
                        submitForm({
                          variables: {
                            report: {
                              suspicion_type: reportType,
                              date_observed: date,
                              time_observed: time,
                              location_observed: location,
                              room_number: roomNumber,
                              room_registered_name: guestName,
                              age_observed: age,
                              gender,
                              race,
                              ethnicity,
                              hair_color: hairColor,
                              noteable_features: standoutFeatures,
                              license_state: licenseNumber,
                              license_number: licenseState,
                            },
                          },
                        })
                          .then(resp => {
                            console.log({ resp })
                            this.setState({ formPosition: 4 })
                            const { upload } = this.state
                            if (upload) {
                              const {
                                id,
                              } = resp.data.addSuspiciousActivityReport
                              uploadFile({
                                variables: {
                                  sarId: id,
                                  file: upload,
                                },
                              }).then(resp => console.log(resp))
                            }
                          })
                          .catch(err => console.log(err))
                      }
                      className="rack-app__button rack-app__button--primary"
                    >
                      Submit
                    </div>
                  )}
                  {formPosition > 0 && formPosition < 3 && (
                    <div
                      onClick={this.advanceForm}
                      className="rack-app__button rack-app__button--primary"
                    >
                      Next
                    </div>
                  )}
                  {formPosition === 4 && (
                    <div className="rack-form__submit-success">
                      <h3>Success!</h3>
                      <p>
                        Law enforcement has received your report and will look
                        into it right away.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            )}
          </Mutation>
        )}
      </Mutation>
    )
  }
}
