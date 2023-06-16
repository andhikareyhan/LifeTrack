import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './EditButton_StateDefault.module.css';
import { MaterialSymbolsEditOutlineShar } from './MaterialSymbolsEditOutlineShar.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 312:434 */
export const EditButton_StateDefault: FC<Props> = memo(function EditButton_StateDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <a href="/edit-details/"><button type="button" className={classes.editDetails}>
        <MaterialSymbolsEditOutlineShar className={classes.icon} />
        Edit Details
      </button></a>
      
      {/* <div className={classes.rectangle14}></div> */}
      {/* <div className={classes.materialSymbolsEditOutlineShar}>
      </div> */}
    </div>
  );
});
