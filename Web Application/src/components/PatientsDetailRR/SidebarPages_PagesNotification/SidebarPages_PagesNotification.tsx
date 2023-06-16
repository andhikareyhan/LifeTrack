import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { PhBellBoldIcon } from './PhBellBoldIcon.js';
import classes from './SidebarPages_PagesNotification.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 280:126 */
export const SidebarPages_PagesNotification: FC<Props> = memo(function SidebarPages_PagesNotification(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <a href='/notifications/'><button type="button" className={classes.notifications}>
        <PhBellBoldIcon className={classes.icon} />
        Notifications
      </button></a>
    </div>
  );
});
