import React from "react"

const TextInput = props => {
  const handleValueChange = e => props.onValueChange(e.target.value)
  const { placeholder, value, label } = props;
  return (
    <div className="rack-form--text-input">
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleValueChange}
      />
    </div>
  )
}

export default TextInput;
