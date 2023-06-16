import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './AddButton_StateDefault.module.css';
import { IcRoundPlusIcon } from './IcRoundPlusIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 302:151 */
export const AddButton_StateDefault: FC<Props> = memo(function AddButton_StateDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle14}></div>
      <div className={classes.addPatient}>Add Patient</div>
      <div className={classes.icRoundPlus}>
        <IcRoundPlusIcon className={classes.icon} />
      </div>
    </div>
  );
});
