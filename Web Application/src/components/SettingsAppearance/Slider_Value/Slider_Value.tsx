import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { SliderCtrl_stateDefault } from '../SliderCtrl_stateDefault/SliderCtrl_stateDefault';
import classes from './Slider_Value.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 770:3106 */
export const Slider_Value: FC<Props> = memo(function Slider_Value(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.sliderMask}>
        <div className={classes.sliderBar}></div>
        <div className={classes._20mark}></div>
        <div className={classes._40mark}></div>
        <div className={classes._60mark}></div>
        <div className={classes._80mark}></div>
      </div>
      <SliderCtrl_stateDefault className={classes.sliderCtrl} />
    </div>
  );
});
