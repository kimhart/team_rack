import React from "react"

const TextArea = props => {
  const handleValueChange = e => props.onValueChange(e.target.value)
  const { placeholder, value, label } = props
  return (
    <div className="rack-form__input rack-form__input--textarea">
      <label>{label}</label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={handleValueChange}
      />
    </div>
  )
}

export default TextArea
