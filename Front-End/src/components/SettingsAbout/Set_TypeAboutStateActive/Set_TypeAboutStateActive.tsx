import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { MdiInformationSlabCircleOutlin } from './MdiInformationSlabCircleOutlin.js';
import classes from './Set_TypeAboutStateActive.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 737:1897 */
export const Set_TypeAboutStateActive: FC<Props> = memo(function Set_TypeAboutStateActive(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <a href='/settings-about/'><button type="button" className={classes.about}>
        <MdiInformationSlabCircleOutlin className={classes.icon} />
        About
      </button></a>
    </div>
  );
});
