import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { IcTwotoneHelpOutlineIcon } from './IcTwotoneHelpOutlineIcon.js';
import classes from './SidebarPages_PagesSupportState.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 280:132 */
export const SidebarPages_PagesSupportState: FC<Props> = memo(function SidebarPages_PagesSupportState(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <a href="/support/"><button type="button" className={classes.support}>
        <IcTwotoneHelpOutlineIcon className={classes.icon} />
        Support
      </button></a>
    </div>
  );
});
