import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { IconamoonProfileIcon } from './IconamoonProfileIcon.js';
import classes from './Set_TypeProfileStateInactive.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 737:1886 */
export const Set_TypeProfileStateInactive: FC<Props> = memo(function Set_TypeProfileStateInactive(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <a href='/settings-profile/'><button type="button" className={classes.profile}>
        <IconamoonProfileIcon className={classes.icon} />
        Profile
      </button></a>
    </div>
  );
});
