import React from 'react'

const ContentOpp = (props) => {
  return (
    <div>
      <p className="message-opp-id">{props.senderId}</p>
      <div className="message-opp-text">{props.text}</div>
    </div>
  )
}

export default ContentOpp