import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { MaterialSymbolsPrivacyTipOutli } from './MaterialSymbolsPrivacyTipOutli.js';
import classes from './Set_TypePrivacyStateActive.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 737:1888 */
export const Set_TypePrivacyStateActive: FC<Props> = memo(function Set_TypePrivacyStateActive(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <a href='/settings-privacy/'><button type="button" className={classes.privacy}>
        <MaterialSymbolsPrivacyTipOutli className={classes.icon} />
        Privacy
      </button></a>
    </div>
  );
});
