import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './BackButton.module.css';
import { BackbuttonIcon } from './BackbuttonIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 331:174 */
export const BackButton: FC<Props> = memo(function BackButton(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      <div className={classes.backButton}>
        <BackbuttonIcon className={classes.icon} />
      </div>
    </button>
  );
});
