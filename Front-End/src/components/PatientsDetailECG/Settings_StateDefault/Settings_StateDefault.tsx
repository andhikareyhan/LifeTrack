import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { MaterialSymbolsSettingsIcon } from './MaterialSymbolsSettingsIcon.js';
import classes from './Settings_StateDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    ellipse11?: string;
    root?: string;
  };
}
/* @figmaId 529:910 */
export const Settings_StateDefault: FC<Props> = memo(function Settings_StateDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.materialSymbolsSettings}>
        <MaterialSymbolsSettingsIcon className={classes.icon} />
      </div>
    </div>
  );
});
