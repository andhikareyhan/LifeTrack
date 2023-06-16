import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { FluentSnooze16RegularIcon } from './FluentSnooze16RegularIcon.js';
import classes from './Snooze_StateDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    ellipse11?: string;
    root?: string;
  };
}
/* @figmaId 529:899 */
export const Snooze_StateDefault: FC<Props> = memo(function Snooze_StateDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.fluentSnooze16Regular}>
        <FluentSnooze16RegularIcon className={classes.icon} />
      </div>
    </div>
  );
});
