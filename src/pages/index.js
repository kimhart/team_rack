import React from "react"
import "../styles/main.less"
import { Link } from "gatsby";
import Logo from "../components/logo";

export default () => {
  return (
    <div className="rack-app rack-app__main">
      <Logo />
      <div className="rack-app__main-links">
        <Link to="/form">Submit a Report</Link>
        <Link to="/dashboard">View Dashboard</Link>
      </div>
    </div>
  )
}
