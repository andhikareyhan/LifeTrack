import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './SliderCtrl_stateDefault.module.css';
import { SliderIcon } from './SliderIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 770:2952 */
export const SliderCtrl_stateDefault: FC<Props> = memo(function SliderCtrl_stateDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.slider}>
        <SliderIcon className={classes.icon} />
      </div>
    </div>
  );
});
