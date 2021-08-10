import React from 'react'

//displaying notifications
const Notification = ({ dispalyNotification }) => {
  return (
    <div className={`notification-container ${dispalyNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  )
}

export default Notification
