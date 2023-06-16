import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './BackButton_StateDefault.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 376:600 */
export const BackButton_StateDefault: FC<Props> = memo(function BackButton_StateDefault(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      <div className={classes.back}>Back</div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
    </button>
  );
});
