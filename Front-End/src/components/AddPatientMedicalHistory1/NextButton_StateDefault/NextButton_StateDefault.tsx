import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { MaterialSymbolsNavigateNextIco } from './MaterialSymbolsNavigateNextIco.js';
import classes from './NextButton_StateDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 376:516 */
export const NextButton_StateDefault: FC<Props> = memo(function NextButton_StateDefault(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      <div className={classes.next}>Next</div>
      <div className={classes.materialSymbolsNavigateNext}>
        <MaterialSymbolsNavigateNextIco className={classes.icon} />
      </div>
    </button>
  );
});
