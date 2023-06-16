import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { MdiBellCogOutlineIcon } from './MdiBellCogOutlineIcon.js';
import classes from './Set_TypeNotificationsStateActi.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 737:1894 */
export const Set_TypeNotificationsStateActi: FC<Props> = memo(function Set_TypeNotificationsStateActi(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <a href='/settings-notifications/'><button type="button" className={classes.notifications}>
        <MdiBellCogOutlineIcon className={classes.icon} />
        Notifications
      </button></a>
    </div>
  );
});
