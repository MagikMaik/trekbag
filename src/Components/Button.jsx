import React from 'react'

export default function Button({buttonType, text,onClick}) {
  return (
    <button onClick={onClick} className={`btn ${buttonType === "secondary" ? 'btn--secondary' : ''}`}>{text}</button>
  )
}
