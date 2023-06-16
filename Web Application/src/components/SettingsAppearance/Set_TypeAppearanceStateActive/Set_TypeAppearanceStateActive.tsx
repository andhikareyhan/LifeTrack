import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { MdiStarFourPointsOutlineIcon } from './MdiStarFourPointsOutlineIcon.js';
import classes from './Set_TypeAppearanceStateActive.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    mdiStarFourPointsOutline?: ReactNode;
  };
  link?: string;
}
/* @figmaId 737:1899 */
export const Set_TypeAppearanceStateActive: FC<Props> = memo(function Set_TypeAppearanceStateActive(props = {}) {
  const handleClick = () => {
    if (props.link) {
      // redirect to specific link
      window.location.href = props.link;
    }
  };
  
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.appearance} onClick={handleClick}>
      <MdiStarFourPointsOutlineIcon className={classes.icon} />
        Appearance
      </div>
    </div>
  );
});
