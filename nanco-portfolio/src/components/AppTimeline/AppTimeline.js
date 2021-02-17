import React from 'react'
import { Paper, Typography, makeStyles } from '@material-ui/core';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot
} from '@material-ui/lab';

const AppTimeline = () => {
    return (
      <React.Fragment>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">09:30 am</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptatem laudantium nobis deserunt quia quo quam laborum sunt unde at?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptatem laudantium nobis deserunt quia quo quam laborum sunt unde at?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi voluptatem laudantium nobis deserunt quia quo quam laborum sunt unde at?
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">09:30 am</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Eat</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">09:30 am</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Eat</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
    );
};

export default AppTimeline;