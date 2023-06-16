import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './LogOut_StateDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 458:740 */
export const LogOut_StateDefault: FC<Props> = memo(function LogOut_StateDefault(props = {}) {
  const handleLogout = () => {
    // Perform logout action here
    window.location.href = "/main/";
  };
  
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <button type="button" className={classes.logOut} onClick={handleLogout}>Log out</button>
    </div>
  );
});
