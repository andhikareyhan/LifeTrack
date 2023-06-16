import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Logo.module.css';
import { MaterialSymbolsVitalSignsSharp } from './MaterialSymbolsVitalSignsSharp.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 299:41 */
export const Logo: FC<Props> = memo(function Logo(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.materialSymbolsVitalSignsSharp}>
        <MaterialSymbolsVitalSignsSharp className={classes.icon} />
      </div>
      <div className={classes.lifeTrack}>LifeTrack</div>
    </div>
  );
});
