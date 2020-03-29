import React from "react"

const Gender = props => {
  const { selected, label, horizontal } = props
  const handleGender = e => props.onValueChange(e.target.value);
  return (
    <div className={`rack-form__input rack-form__input--radio-group ${horizontal ? '-horizontal' : ""}`}>
      <p>{label}</p>
      <label>
        <input
          type="radio"
          name="male"
          value="male"
          checked={selected === "male"}
          onChange={handleGender}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          value="female"
          checked={selected === "female"}
          onChange={handleGender}
        />
        Female
      </label>
      <label>
        <input
          type="radio"
          value="other"
          checked={selected === "other"}
          onChange={handleGender}
        />
        Not sure
      </label>
    </div>
  )
}

export default Gender
