import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse3Icon } from './Ellipse3Icon.js';
import { MaterialSymbolsAddNotesOutline } from './MaterialSymbolsAddNotesOutline.js';
import classes from './NotesButton_TypeNotesStateDefa.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 312:468 */
export const NotesButton_TypeNotesStateDefa: FC<Props> = memo(function NotesButton_TypeNotesStateDefa(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <button type="button" className={classes.button}>
        <div className={classes.iconWrapper}>
          <div className={classes.ellipse3}>
          <MaterialSymbolsAddNotesOutline className={classes.icon} />
          </div>
          {/* <MaterialSymbolsAddNotesOutline className={classes.icon} /> */}
        </div>
      </button>
    </div>
  );
});
