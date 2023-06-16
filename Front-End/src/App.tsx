import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { LoginPage1 } from './components/LoginPage1/LoginPage1';
// import { SignupPage1 } from './components/SignupPage1/SignupPage1';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <LoginPage1 />
    </div>
  );
});
