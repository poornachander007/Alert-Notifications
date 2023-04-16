// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import './index.css'
import Notification from '../Notification'

const AlertNotifications = () => (
  <div className="page_container">
    <div className="notifications_container">
      <h1 className="heading">Alert Notifications</h1>
      <Notification>
        <AiFillCheckCircle className="icon success" />
        <div className="heading_description">
          <h1 className="success">Success</h1>
          <p>You can access all the files in the folder</p>
        </div>
      </Notification>

      <Notification>
        <RiErrorWarningFill className="icon error" />

        <div className="heading_description">
          <h1 className="error">Error</h1>
          <p>Sorry, you are not authorized to have access to delete the file</p>
        </div>
      </Notification>

      <Notification>
        <MdWarning className="icon warning" />
        <div className="heading_description">
          <h1 className="warning">Warning</h1>
          <p>Viewers of this file can see comments and suggestions</p>
        </div>
      </Notification>

      <Notification>
        <MdInfo className="icon info" />

        <div className="heading_description">
          <h1 className="info">Info</h1>
          <p>Anyone on the internet can view these files</p>
        </div>
      </Notification>
    </div>
  </div>
)

export default AlertNotifications
// Access the elements passed to the Notification Component using the children prop.
// AiFillCheckCircle from react-icons should be used for Success notification.
// RiErrorWarningFill from react-icons should be used for Error notification.
// MdWarning from react-icons should be used for Warning notification.
// MdInfo from react-icons should be used for Info notification.
// GrFormClose from react-icons should be used as Close icon in each notification.

// The app must have the following functionalities

// For each notification, the Notification component should receive the below elements as children
// Icon
// Heading
// Description
