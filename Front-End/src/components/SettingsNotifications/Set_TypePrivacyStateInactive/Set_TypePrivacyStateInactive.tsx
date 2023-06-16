import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { MaterialSymbolsPrivacyTipOutli } from './MaterialSymbolsPrivacyTipOutli.js';
import classes from './Set_TypePrivacyStateInactive.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 737:1900 */
export const Set_TypePrivacyStateInactive: FC<Props> = memo(function Set_TypePrivacyStateInactive(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <a href='/settings-privacy/'><button type="button" className={classes.privacy}>
        <MaterialSymbolsPrivacyTipOutli className={classes.icon} />
        Privacy
      </button></a>
    </div>
  );
});
