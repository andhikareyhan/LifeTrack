import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { IconamoonProfileIcon } from './IconamoonProfileIcon.js';
import classes from './Set_TypeProfileStateActive.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 737:1884 */
export const Set_TypeProfileStateActive: FC<Props> = memo(function Set_TypeProfileStateActive(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <a href='/settings-profile/'><button type="button" className={classes.profile}>
        <IconamoonProfileIcon className={classes.icon} />
        Profile
      </button></a>
    </div>
  );
});
