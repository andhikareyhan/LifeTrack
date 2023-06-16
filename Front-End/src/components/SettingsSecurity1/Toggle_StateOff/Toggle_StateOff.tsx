import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { SliderCtrl_stateDefault } from '../SliderCtrl_stateDefault/SliderCtrl_stateDefault';
import classes from './Toggle_StateOff.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 797:2015 */
export const Toggle_StateOff: FC<Props> = memo(function Toggle_StateOff(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame21}>
        <div className={classes.rectangle73}></div>
      </div>
      <SliderCtrl_stateDefault className={classes.sliderCtrl} />
    </div>
  );
});
