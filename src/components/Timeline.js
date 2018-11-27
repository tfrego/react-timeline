import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import PropTypes from 'prop-types';

const Timeline = (props) => {

  const timelineEvents = props.events.map((event, index) => {
    return <TimelineEvent person={event.person} status={event.status} timestamp={event.timeStamp} key={index} />
  });

  return (
    <div className="timeline">{timelineEvents}</div>);
};

Timeline.propTypes = {
  events: PropTypes.array
}

export default Timeline;
