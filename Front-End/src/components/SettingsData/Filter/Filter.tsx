import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Filter.module.css';
import { MaterialSymbolsArrowDropDownIc } from './MaterialSymbolsArrowDropDownIc.js';

interface Props {
  className?: string;
  classes?: {
    box?: string;
    root?: string;
  };
  swap?: {
    materialSymbolsArrowDropDown?: ReactNode;
  };
  text?: {
    label?: ReactNode;
  };
}
/* @figmaId 357:193 */
export const Filter: FC<Props> = memo(function Filter(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.box || ''} ${classes.box}`}></div>
      <div className={classes.materialSymbolsArrowDropDown}>
        {props.swap?.materialSymbolsArrowDropDown || <MaterialSymbolsArrowDropDownIc className={classes.icon} />}
      </div>
      {props.text?.label != null ? props.text?.label : <div className={classes.label}>Label</div>}
    </div>
  );
});
