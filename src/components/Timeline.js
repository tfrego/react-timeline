import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {

  const timelineEvents = props.events.map((event, index) => {
    return <TimelineEvent
      person={event.person}
      status={event.status}
      timestamp={event.timeStamp}
      key={index}
      />
  });

  return timelineEvents;
}

export default Timeline;
