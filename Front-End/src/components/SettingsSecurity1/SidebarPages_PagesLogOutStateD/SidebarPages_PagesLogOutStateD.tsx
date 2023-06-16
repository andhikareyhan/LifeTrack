import { memo, useState } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Overlay } from '../../LogoutOverlay/Overlay';
import classes from './SidebarPages_PagesLogOutStateD.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  onOpenOverlay: () => void;
}
/* @figmaId 280:135 */
export const SidebarPages_PagesLogOutStateD: FC<Props> = memo(function SidebarPages_PagesLogOutStateD(props = {
  onOpenOverlay: function (): void {
    throw new Error('Function not implemented.');
  }
}) {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleOpenOverlay = () => {
    setShowOverlay(true);
  }

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  }
  
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <button type="button" className={classes.logOut} onClick={props.onOpenOverlay}>
        <VectorIcon className={classes.icon} />
        Log Out
      </button>
      {showOverlay && <Overlay onClose={handleCloseOverlay} />}
    </div>
  );
});
