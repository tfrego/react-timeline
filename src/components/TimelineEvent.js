import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  console.log(props)

  return (
    <section className="timeline-event">
      <h3>{props.person}</h3>
      <p><Timestamp time={props.timestamp} /></p>
      <p>{props.status}</p>
    </section>
  );
};

export default TimelineEvent;
