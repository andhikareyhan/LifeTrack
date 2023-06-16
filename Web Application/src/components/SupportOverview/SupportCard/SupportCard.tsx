import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse22Icon } from './Ellipse22Icon.js';
import classes from './SupportCard.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    ellipse22?: ReactNode;
  };
  text?: {
    title?: ReactNode;
    description?: ReactNode;
  };
}
/* @figmaId 845:2638 */
export const SupportCard: FC<Props> = memo(function SupportCard(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.title != null ? props.text?.title : <div className={classes.title}>Title</div>}
      {props.text?.description != null ? (
        props.text?.description
      ) : (
        <div className={classes.description}>Description</div>
      )}
      <div className={classes.ellipse22}>{props.swap?.ellipse22 || <Ellipse22Icon className={classes.icon} />}</div>
    </div>
  );
});
