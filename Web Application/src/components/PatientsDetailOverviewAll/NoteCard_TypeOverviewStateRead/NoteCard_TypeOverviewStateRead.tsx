import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Box_StateInactive } from '../Box_StateInactive/Box_StateInactive';
import { Star_StateInactive } from '../Star_StateInactive/Star_StateInactive';
import classes from './NoteCard_TypeOverviewStateRead.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    star?: ReactNode;
  };
  text?: {
    subject?: ReactNode;
    createdBy?: ReactNode;
    apr9?: ReactNode;
  };
}
/* @figmaId 682:2654 */
export const NoteCard_TypeOverviewStateRead: FC<Props> = memo(function NoteCard_TypeOverviewStateRead(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle18}></div>
      {props.text?.subject != null ? props.text?.subject : <div className={classes.subject}>Subject</div>}
      {props.text?.createdBy != null ? props.text?.createdBy : <div className={classes.createdBy}>Created by</div>}
      {props.text?.apr9 != null ? props.text?.apr9 : <div className={classes.apr9}>Apr 9</div>}
      <Box_StateInactive className={classes.box} />
      {props.swap?.star || <Star_StateInactive className={classes.star} />}
    </div>
  );
});
