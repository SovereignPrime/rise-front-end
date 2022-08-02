import React from 'react'

const ContentMe = (props) => {
  return (
    <div>
      <p className="message-me-id">{props.senderId}</p>
      <div className="message-me-text">{props.text}</div>
    </div>
  )
}

export default ContentMe