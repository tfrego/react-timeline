import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const TimelineEvent = (props) => {
  console.log(props)

  return (
    <section className="timeline-event">
      <div className="event-person">{props.person}</div>
      <div className="event-time"><Timestamp time={props.timestamp} /></div>
      <div className="event-status">{props.status}</div>
    </section>
  );
};

TimelineEvent.propTypes = {
  person: PropTypes.string,
  status: PropTypes.string,
  timestamp: PropTypes.string,
}

export default TimelineEvent;
