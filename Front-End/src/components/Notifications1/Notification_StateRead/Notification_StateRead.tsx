import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse19Icon } from './Ellipse19Icon.js';
import classes from './Notification_StateRead.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle61?: string;
    root?: string;
  };
  text?: {
    insertTextHere?: ReactNode;
    time?: ReactNode;
    category?: ReactNode;
  };
}
/* @figmaId 682:2703 */
export const Notification_StateRead: FC<Props> = memo(function Notification_StateRead(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle61 || ''} ${classes.rectangle61}`}></div>
      {props.text?.insertTextHere != null ? (
        props.text?.insertTextHere
      ) : (
        <div className={classes.insertTextHere}>Insert text here</div>
      )}
      {props.text?.time != null ? props.text?.time : <div className={classes.time}>Time</div>}
      {props.text?.category != null ? props.text?.category : <div className={classes.category}>Category</div>}
      <div className={classes.ellipse19}>
        <Ellipse19Icon className={classes.icon} />
      </div>
    </div>
  );
});
